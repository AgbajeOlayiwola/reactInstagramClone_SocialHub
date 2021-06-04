import React, { useContext, useState } from 'react'
import "./style.css";
import { SignInBtn } from '../../Components';
import { UserContext } from '../../const/user';

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import makeid from '../../helper/functions'
import {storage, db} from '../../firebase';

import firebase from 'firebase';

export default function CreatePost() {
    //getuser info which is a global variable hook
    const [user, setUser] = useContext(UserContext).user;
 
    //caption for holding caption text hook
    const [caption, setCaption] = useState("");
    //image state hook
    const [image, setImage] = useState(null)

    //progress hook
    const [progress, setProgress] = useState(0)
    //handle change function  
    const handleChange = (e) => {
            //id statement to check if g=file is present
        if(e.target.files[0]){
            setImage(e.target.files[0]);

            var selectedImageSource = URL.createObjectURL(e.target.files[0]);

            var imagePreview = document.getElementById("image-preview");

            imagePreview.src = selectedImageSource;
            imagePreview.style.display = "block"
        }
        
    }
    //funnction to handle upload
    const handleUpload = () =>{
        if(image){
            //call functions to generate randomname for image file name
            var imageName = makeid(10);
            const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);

            uploadTask.on("state_changed", (snapshot) => {
                //progress function
                const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            setProgress(progress)
            }, (error) => {
                console.log(error);
            }, () =>{
                //to get donlod and upload
                storage.ref("images").child(`${imageName}.jpg`).
                getDownloadURL()
                .then((imageURL) => {
                    db.collection("post").add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    cption: caption,
                    photoURL: imageURL,
                    profilePhoto: user.photoURL,
                    username: user.email.replace("@gmail.com", "")
                    })

                });
                setProgress("");
                setCaption("");
                document.getElementById("image-preview").style.display="none";
            })

        }

    }

    return ( 
        <div className="createPost">
        <div className="createPost_LoggedIn">
            {user ? (
            <div>
            <p>Create A Post</p>
                            <div className="createpost_loggedincenter">
                            <textarea
                            className="createpost_textarea"
                            rows="3" 
                            value={caption}
                            placeholder="enter caption"
                            //onChange function for geting and updating cption value
                            onChange={(e) => setCaption(e.target.value)}
                            >
                            </textarea>

                            {/* image preview div */}
                            <div className="cretePost_ImagePeview">
                                <img id="image-preview" alt="" />
                            </div>


                            </div>
                            <div className="createpost_Bottom">
                            <div className="createpost_addphoto">
                                {/* input to get image */}
                                <label htmlFor="fileInput">
                                    <AddAPhotoIcon 
                                    style={{cursor:"Pointer", fontSize:"20px"}}/>
                                </label>
                                <input 
                                id="fileInput" 
                                type="file" 
                                accept="image/*" 
                                onChange={handleChange}/>

                            </div>
                                <button className="createpost_Uploadbtn" 
                                onClick= {handleUpload}
                                style={{color: caption ? '#000' : 'lightgrey', 
                                border: "none", cursor:"pointer"}}> {`Upload ${progress !=0 ? progress : ""}%`} </button>
                </div>
                        </div>
       
            ) : (
            <div> 
                {/* Signing comonent should display if user isnt logged in*/}
                <SignInBtn/>
                <p style={{marginLeft: "0px"}}>to post and comment</p></div>
            )}
        </div>
        </div>
    )
}

import React, {useState, useContext} from 'react';
import "./index.css";
import { Comment } from '../../Components';
import { db, storage } from '../../firebase';
import CommentInput from '../../Components/comment-input';
import { UserContext } from '../../const/user';

export default function Post({profileURL, username, id, photoURL, caption, comments}) {

const [user, setUser] = useContext(UserContext).user;
    const deletePost = () =>{
        //delete images from firebase
        //get image ref file to be deleted

        var imageRef= storage.refFromURL(photoURL);

        //deletefile
        imageRef.delete().then(function(){
            console.log("deleted image")
        }).catch(function (error){
            console.log(`error ${error}`)
        });
        //delete post from firrebase firestore
        db.collection("post")
        .doc(id).delete()
        .then(function (){
            console.log('post deleted successfully');
        })
        .catch(function (error){
            console.log(`erro post info delete ${error}`);
        })
    }
    return (
        <div className="post">
            <div className="post_header">
                <div className="post_header_left">
                    <img src={profileURL} className="post_headerPic"/>
                    <p style={{marginLeft:" 12px"}}>{username}</p>

                </div>
                {user ? <button onClick={deletePost} className="button_delete">Delete</button>
                        :<></>}
            </div>
            <div className="post_center">
                    <img className="post_photoURL" src={photoURL}/>
                </div>
            
            <div>
                <p>
                    <span style={{fontWeight:'500', marginRight:'6px'}}>{username}</span> 
                    
                    {caption}
                </p>
            </div>

            {comments ? (
                comments.map((comment) => (
            <Comment username={comment.username} caption={comment.comment}/>
            ))
            ) : (
        <div></div>
            )}

           {user ? <CommentInput comments={comments} 
           id={id}/> : <></>} 
        </div>
    )
}


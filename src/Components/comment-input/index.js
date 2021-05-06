import React, {useState, useContext} from 'react';
import './style.css';
import { UserContext } from '../../const/user';
import { db } from '../../firebase';

export default function CommentInput({comments, id}) {
    const [comment, setComment] = useState("");
    const [user, setUser] = useContext(UserContext).user;
    const [commentArray, setCommentArray] = 
    useState(comments ? comments: []);

        const addComment=()=>{
            //add comment to the post info
            if(comment != ""){
                //add comment to the post info

                commentArray.push({
                    comment: comment,
                    username: user.email.replace("@gmail.com", ""),
                })
            }
            db.collection("post")
            .doc(id)
            .update({
                comments: commentArray,
            }).then(function(){
                setComment("");
                console.log("comment Added")
            }).catch(function(error){
                console.log(`error ${error}`);
            });
        }
    return (
        <div className="commentInput">
            <textarea placeholder="Comment" 
            className="commentInput_textarea" 
            rows="1"
            value={comment}
            onChange={(e) => setComment(e.target.value)}>
            </textarea>

            <button onClick={addComment} className="commentInput_Button">Post</button>
        </div>
    )
}

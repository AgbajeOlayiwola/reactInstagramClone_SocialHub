import React, {useState, useEffect}from 'react'
import { Post } from '../../Containers';
import "./index.css"
import { db, storage } from '../../firebase';

export default function Feed() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        db.collection("post").onSnapshot((snapshot)=>
        {
            setPost(snapshot.docs.map((doc)=>({id:doc.id, post: doc.data()})));
        })
    }, [])
    console.log('na me')
    return (
        <div className="feed">

            {post.map(({id, post}) =>{
            return <Post
            key={id}
            id={id}
            profileURL={post.profilePhoto}
            username={post.username}
            photoURL = {post.photoURL}
            caption = {post.cption}
            comments={post.comments}
            />
            })}<br></br>
        </div>
    )
}

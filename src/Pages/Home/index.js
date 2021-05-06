import React from 'react'
import "./index.css";
import { CreatePost } from '../../Containers';
import Feed from '../../Containers/Feed';

export default function Home() {
    return (
        <div className="home">
          <CreatePost />
          <Feed/>
        </div>
    )
}


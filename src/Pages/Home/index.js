import React from 'react'
import "./index.css";
import { CreatePost } from '../../Containers';
import Feed from '../../Containers/Feed';
import Particles from "./particles";

export default function Home() {
    return (
        <div className="home">
        <div className='par'>
       <Particles/>
       </div>
       <div className='home_FeeCre'>
          <CreatePost />
          <Feed/>
          </div>
        </div>
    )
}


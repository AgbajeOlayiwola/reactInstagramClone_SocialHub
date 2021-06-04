import React from 'react'
//comments and username and caption passed as props to be used in DOM
export default function  Comment({username, caption}) {
    return (
        <div className="comment">
            <p>
                <span style={{fontWeight:"500", marginRight:"40px"}}>
                {username}
                </span>
                {caption}
            </p>
        </div>
    )
}

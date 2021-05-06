import React, {useState, useContext} from 'react';
import { SignInBtn } from '../../Components';
import "./index.css"; 
import { UserContext } from '../../const/user';

export default function Navbar() {

    const [user, setUser] = useContext(UserContext).user;
    
    return (
        <div className="navBar">
            <h1>Social Hub </h1>

            {user ? 
            (<img className="navbar_img" alt="" src={user.photoURL}/>
            ) : (
            <SignInBtn/>
            )}
        </div>
    );
}

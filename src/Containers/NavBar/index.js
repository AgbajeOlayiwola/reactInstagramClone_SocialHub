import React, {useState, useContext} from 'react';
import { SignInBtn } from '../../Components';
import "./index.css"; 
import { UserContext } from '../../const/user';

export default function Navbar() {
//global user variable
    const [user, setUser] = useContext(UserContext).user;
    
    return (
        <div className="navBar">
            <h1>Social Hub </h1>
            {/*ternary for signin button and user name cswitch */}
            {user ? 
            (<div className="Navbar_Profile"><p>{user.displayName}</p><img className="navbar_img" alt="" src={user.photoURL}/></div>
            ) : (
            <SignInBtn/>
            )}
        </div>
    );
}

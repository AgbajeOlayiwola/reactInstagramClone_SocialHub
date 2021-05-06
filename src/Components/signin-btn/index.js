import React, { useContext} from 'react';
import "./style.css";
import {signInWithGoogle} from "../../services/auth";
import { UserContext } from '../../const/user';

export default function SignInBtn() {
    const [user, setUser] =  useContext(UserContext).user;

    const signInBtnClick = async() => {
            let userBySignIn =  await signInWithGoogle();
                if(userBySignIn) setUser(userBySignIn);
                 

    };

    return (
        <div className="signInBtn" onClick={signInBtnClick}>
            <p>Sign in with google</p>
        </div>
    );
}

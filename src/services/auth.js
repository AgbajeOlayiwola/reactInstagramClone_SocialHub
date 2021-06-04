import {auth, provider} from "../firebase";
//SWG async function fires a goofle popup login
export const signInWithGoogle = async() =>{
    //undefined user
    let user;
    //await popup a function from firebase auth method
    await auth.signInWithPopup(provider).then((res)=>{
        console.log(res.user);
        //defined user
        user = res.user;
    })
    //catch error
    .catch((error) => {
        console.log(error.message);
    });
    return user;
};

export const logout= async()=>{
    let logout_sucess;
    await auth.signOut().then(() =>{
        logout_sucess = true;
    }).catch((error) => {
        console.log(error.message)
    })

    return logout_sucess;
}
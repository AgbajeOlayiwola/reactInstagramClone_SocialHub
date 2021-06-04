import { createContext, useState } from 'react'; 

export const UserContext = createContext();

export const UserContextProvider = (props) => {

    const [user, setUser] = useState(null);

    return(
        //user context provider for creating globa variable
        <UserContext.Provider 
        value={{user: [user, setUser] }}>
        {/*make global data availabe to all children*/}
        {props.children}
        </UserContext.Provider>
    );
};   
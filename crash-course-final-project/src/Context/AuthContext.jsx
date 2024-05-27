import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState({
        loggedStatus: true,
        token: null,
    })

    function login(token){
        setIsLoggedIn({
            loggedStatus: true,
            token: token
        })
    }

    function logout(){
        setIsLoggedIn({
            loggedStatus: false,
            token: null
        })
    }

    const authData = {isLoggedIn, login, logout};

    return(
        <AuthContext.Provider value={authData}>
            {props.children}
        </AuthContext.Provider>
    )
}
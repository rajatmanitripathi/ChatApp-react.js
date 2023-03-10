import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
    const[CurrentUser, setUser]= useState({})
    useEffect(()=>{
     const unsub = onAuthStateChanged(auth, (user)=>{
setUser(user);
console.log(user);
        })
        return ()=>{
            unsub();
        }
    },[]);
    return(
        <AuthContext.Provider value={{CurrentUser}}>
        {children}
        </AuthContext.Provider>
    )
   
}
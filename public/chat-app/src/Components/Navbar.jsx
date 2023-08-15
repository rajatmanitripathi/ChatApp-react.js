import React, { useContext } from "react";
import {signOut} from "firebase/auth"
import {auth} from '../firebase'
import { useActionData } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

const Navbar=()=>{
    const {CurrentUser} = useContext(AuthContext)
    return(
        <div className="navbar">
             <span className="logo">Chat app</span>
        <div className="user">
            <img src= {CurrentUser.photoURL} alt="" />
            <span>{CurrentUser.displayName}</span>
            <button onClick={async()=>( await signOut(auth))}>logout</button>
        </div>
        </div>
       
    )
}
export default Navbar

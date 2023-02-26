import React, { useState } from "react";

import { auth,storage,db} from "../firebase";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage";
import {doc, setDoc} from "firebase/firestore";
import { useNavigate , Link} from "react-router-dom";

const Register = () =>{
 const [err , seterr] =useState(false);
 const navigate = useNavigate();
    const handleSubmit=async(e)=>{



      
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
       
        
         
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
       await setDoc(doc(db, "users", res.user.uid),{
        uid:res.user.uid,
        displayName,
        email,
       
      });
      await setDoc(doc(db,"userChats",res.user.uid),{});
      navigate("/");
      } catch (err) {
        seterr(true);
      }

  

        
       
      

        
     




      }
 
    
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">CHATAPP</span>
                <span className="title">REG</span>
                <form className="form" onSubmit={handleSubmit}>
                    <input type={"text"} placeholder = "display name" />
                    <input type={"email"} placeholder = "email" />
                   
                    <input type={"password"} placeholder = "password"/>
                    <input style={{display:"none"}} type={"file"} id="file" />
                    <label htmlFor="file">
                         <img src="image.png" alt="" />
                         <span>add an avatar</span>
                    </label>
                    <button className="button">signup</button>
                   
                    
                </form>
               
                <p>you do have an account?<Link to="/login">Login</Link></p>
            </div>
        </div>

    )
}
export default Register
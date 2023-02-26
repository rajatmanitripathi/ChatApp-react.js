import { auth,storage,db} from "../firebase"
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"

const Login= () =>{
    const [err , seterr] =useState(false);
    const navigate = useNavigate();
       const handleSubmit=async(e)=>{
           e.preventDefault();
           
           const email = e.target[1].value; 
           const password = e.target[2].value;
          
           
            
         try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
         } catch (err) {
           seterr(true);
         }              
        }
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">CHATAPP</span>
                <span className="title">login</span>
                <form onSubmit={handleSubmit} className="form">
                   
                    <input type={"email"} placeholder = "email" />
                   
                    <input type={"password"} placeholder = "password"/>
                   
                    <button className="button">signup</button>
                    {err && <span>Something went wrong!</span>}
                </form>
               
                <p>don't have an account?<Link to="/register">Register</Link></p>
            </div>
        </div> 

    )
}

export default Login
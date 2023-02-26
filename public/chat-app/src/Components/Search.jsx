import React from "react";
import { useState } from "react";
import { collection, query, where } from "firebase/firestore";
import { async } from "@firebase/util";
import {db} from "../firebase";
import {doc, setDoc,getDoc} from "firebase/firestore";

const Search = ()=>{
    const [userName, setuserName]=useState("")
const [user, setUser]=useState(null)
const [err, seterr]= useState(false)
    const handleSearch=async()=>{
        const q = query(collection(db, "users"), where("displayName", "==", "userName"));
       try {
        const querySnapshot = await getDoc(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  setUser(doc.data());
});
       } catch (error) {
        seterr(true)
       } 
    }
    const handleKey=async(e)=>{
        e.code === "Enter"&& handleSearch()

    }
    return(
       <div className="search" >
            <div className="searchinfo">
            <input type={"search"} placeholder = "Search Name" onKeyDown={handleKey} onChange={(e)=>setuserName(e.target.value)} />
            </div>
            {err && <span>something went wrong!</span>} 
            {user && <div className="user1" >
               <img src="https://i.pinimg.com/736x/ce/dc/b7/cedcb7c362b12989d4a9785ac6ab35dd.jpg" alt=""/>
            
            <div className="userchatinfo">
                <span>{user.displayName}</span>
            </div>
            </div>}
            
        </div>
    )
}
export default Search
import React, { useContext } from "react";
import { useState } from "react";
import { collection, getDoc, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { async } from "@firebase/util";
import {db} from "../firebase";
import {doc, setDoc,getDocs} from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';

const Search = ()=>{
    const [userName, setuserName]=useState("")
const [user, setUser]=useState(null)
const [err, seterr]= useState(false)
const {CurrentUser} = useContext(AuthContext)
    const handleSearch=async()=>{
        const q = query(collection(db, "users"), where("displayName", "==", userName));
        console.log(q)
       try {
        const querySnapshot = await getDocs(q);
        
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  setUser(doc.data());
  console.log(doc.data())
});
       } catch (error) {
        seterr(true)
       } 
    }
    const handleKey=async(e)=>{
        e.code === "Enter"&& handleSearch()

    } 
    const handleSelect =async()=>{
        const combinedId = CurrentUser.uid > user.uid 
         ? CurrentUser.uid + user.uid
         : user.uid +CurrentUser.uid;
         
         try {
            const res = await getDoc(doc(db, "chats", combinedId))
            if(!res.exists()){
                
                await setDoc(doc(db,"chats",combinedId),{messages:[]})
               
               
                 await updateDoc(doc(db,"userChats", CurrentUser.uid),{
                    [combinedId +".userinfo"]:{
                        uid:user.uid,
                        displayName:user.displayName,
                        photoURL:user.photoURL,
                        

                    },
                    [combinedId+".date"]: serverTimestamp()

                    

                })
                 await updateDoc(doc(db,"userChats", user.uid),{
                    [combinedId +".userinfo"]:{
                        uid:CurrentUser.uid,
                        displayName:CurrentUser.displayName,
                        photoURL:CurrentUser.photoURL,
                        

                    },
                    [combinedId+".date"]: serverTimestamp()  

                    

                })
                
            }
         } catch (error) {
            console.log(error)
         }
         setuserName("")
         setUser(null)
         

       
    }
            return(
       <div className="search" >
            <div className="searchinfo">
            <input type={"search"} placeholder = "Search Name"  onKeyDown={handleKey} onChange={(e)=>setuserName(e.target.value)}
             value={userName} />
            </div>
            {err && <span>something went wrong!</span>}
            {user && <div className="chatsinfo" onClick={handleSelect}>
               <img src={user.photoURL}
               alt=""/>
            
            <div className="userchatinfo">
                <span>{user.displayName}</span>
            </div>
            </div>}
            
        </div>
    );
}
export default Search
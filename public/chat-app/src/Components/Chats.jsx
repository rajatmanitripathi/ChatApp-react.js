import React, { useEffect, useState, useContext } from "react";

import { doc, onSnapshot } from "firebase/firestore";
import { auth,storage,db} from "../firebase";
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Chats = ()=>{
    
    const [chats, setChats] = useState([])
    const {CurrentUser} = useContext(AuthContext)
    const patcher= useContext(ChatContext)
    const fetchChats = (u)=>{
        
       patcher.Dispatch({type:"Change_User" , payload:u})
        
            }
   
 
    useEffect(()=>{
        const getchats= ()=>{
            try {
                const unsub = onSnapshot(
                    doc(db, "userChats", CurrentUser.uid), 
                    (doc) => {
                      setChats(doc.data())
                    });
                    return ()=>{
                        unsub()
                    }
            } catch (error) {
                console.log(error)
            }
            
               
                    
                
        }

           
        CurrentUser.uid && getchats();
        
        },[CurrentUser.uid])
    
    

    return(
        
            <div className="chats">
        
         {Object.entries(chats)?.map(chat=>(
            <div className="chatsinfo" key={chat[0]}  onClick={()=>{fetchChats(chat[1].userinfo)}}>
            <img src= {chat[1].userinfo.photoURL} alt="" />
            
            
            <div className="userchatinfo">
                    <span>{chat[1].userinfo.displayName}</span>
                    <p>{chat[1].lastmessage?.text}</p>
                   
                    
                    </div>
                    </div>
         ))}   
 
         
        
        </div>
           
            
       
           
    )
}
export default Chats
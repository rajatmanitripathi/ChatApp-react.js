import React, { useState, useContext,useEffect, } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import Message from "./message"
import { ChatContext } from '../context/ChatContext';
import { db} from "../firebase";


const Messages=()=>{
    const Data= useContext(ChatContext)
    const [message, setmessage]= useState([])
    useEffect(()=>{
        
            try {
                const unsub = onSnapshot(
                    doc(db, "chats", Data.data.chatId), 
                    (doc) => {
                      setmessage(doc.data().messages)
                    });
                    return ()=>{
                        unsub()
                    }
            } catch (error) {
                console.log(error)
            }
            
               
                    
                
        

           
       
        
        },[Data.data.chatId])
    return(
        <div className="messages">
            {message.map(m=>(
                <Message message ={m} key={m.id}/>
            ))}
            
           
            
            
        </div>
    )
}
export default Messages
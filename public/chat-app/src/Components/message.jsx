import React, {useContext } from "react";
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';

const Message = ({message})=>{
    const {CurrentUser} = useContext(AuthContext)
    const Data= useContext(ChatContext)
    
    return(
        
            
        
            <div className={`message${message.senderId === CurrentUser.uid && "owner"}`}>
            <div className="messageinfo">
                <img src={message.senderId === CurrentUser.uid ? CurrentUser.photoURL:Data.data.photoUrl} alt=""/>
                <span>just now</span>
            </div>
            <div className="messagecontent">
                <p>{message.text}</p>
               {message.img && <img src={message.img} alt=""/>} 

            </div>
        </div>
        
       
       
       
       
    )
}
export default Message

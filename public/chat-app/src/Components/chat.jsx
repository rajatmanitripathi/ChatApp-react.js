import React from "react";
import Messages from "./Messages";
import Input from "./Input"

const Chat =()=>{
return(
    <div className="chat">
        <div className="chatinfo">
            <span>Nikki</span>
            <div className="chatimg">
                <img src="https://static.vecteezy.com/system/resources/previews/002/261/132/original/camera-icon-symbol-sign-isolate-on-white-background-illustration-eps-10-free-vector.jpg" alt="" />
                <img src="https://static.vecteezy.com/system/resources/previews/005/533/486/non_2x/add-bubble-isolated-icon-which-can-easily-modify-or-edit-vector.jpg" alt="" />
                <img src="https://media.istockphoto.com/vectors/add-friend-icon-vector-illustration-vector-id667646244?k=20&m=667646244&s=612x612&w=0&h=NYGmLroPO1NaY-1-73FvhJ7Zv_Q6gkpFUyWvB9wmnaE=" alt="" />
            </div>
        </div>
      <Messages/>
      <Input/> 
    </div>
)
}
export default Chat
import React from "react";

const Input = ()=>{
    return(
        <div className="input">
            <input type="text" placeholder="...type something"/> 
            <div className="send">
            <img src="data:image/png;base64,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" alt=""/>
            <input type="file" style ={{display:"none"}} id="file"/>
            <label htmlFor="file">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0qEV_mEF19gs68CDaSmZ4e0kssbxyOAMbw&usqp=CAU" alt=""/>
            </label>
            <button>Send</button>
            </div>
           
        </div>
    )
}
export default Input
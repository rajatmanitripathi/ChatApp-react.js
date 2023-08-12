import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/chat";

const Home = ()=>{
    return(
        <div className="home">
            <div className="Container">
               <Sidebar/>
               <Chat/>
            </div>
        </div>
    )
}
export default Home
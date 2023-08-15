import { createContext, useEffect, useState, useReducer, useContext } from "react";
import { AuthContext } from './AuthContext';


export const ChatContext = createContext();
export const ChatContextProvider = ({children})=>{
    const {CurrentUser} = useContext(AuthContext)
  const INITIAL_STATE ={
    chatId :"null",
    user:{},
  }
       const chatReducer =(state,action)=>{
switch(action.type){
    case "Change_User":
        return{
        user: action.payload,
        chatId: CurrentUser.uid > action.payload.uid 
        ? CurrentUser.uid + action.payload.uid
        : action.payload.uid +CurrentUser.uid
    }
    default:
        return state;
}
       }
       const[state,dispatch]= useReducer(chatReducer,INITIAL_STATE)
    return(
        <ChatContext.Provider value={{data:state, Dispatch:dispatch}}>
        {children}
        </ChatContext.Provider>
    )
   
}
import { useReducer } from "react";
import { Children } from "react";
import { createContext } from "react";

export const  AuthContext = createContext();



export const LogReducer=(state={Auth:false,token:null},action)=>{
   
     
    switch(action.type){

        case "LOG_IN" : return ({ ...state , Auth: true ,token:"abc"})
        
        case "LOG_OUT" : return { ...state , Auth:false, token:null}
       
        default : return state;
    }
     
}



export function AuthContextProvider({children}){

 

    return(

        <AuthContext.Provider value={{LogReducer}}>{children}</AuthContext.Provider>
    )
}
import React from 'react'
import { Navigate } from 'react-router'

export const ProtectedRoute = ({children}) => {
    // console.log(props.children)
    console.log("protected route")
    const check=localStorage.getItem("login")
console.log(check)
console.log(children)
    if(check=="true"){
        return children
    }
    else{
      return  <Navigate to={"/login"}/>
    }
   
}

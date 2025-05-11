import React, { useEffect, useState } from 'react'

export const useOnline = () => {
    const [isOnline,setIsOnline]=useState(true)

    useEffect(()=>{
        const onlinefun=()=>{
            setIsOnline(true)
        }
        const offlinefun=()=>{
            setIsOnline(false)
        }
        window.addEventListener("online",onlinefun)
        window.addEventListener("offline",offlinefun)
        return ()=>{
         window.removeEventListener('online',onlinefun)
         window.removeEventListener("offline",offlinefun)
        }
            
    },[])
 
    return isOnline
}

import { useEffect, useState } from "react"


export const useCallApi = (url) => {
    const [Data,setData]=useState(null)
    const [isLoading,setisLoading]=useState(true)
    
		const getAllcategory=async()=>{
		setisLoading(true)
		const res=await fetch(url)
		const data=await res.json()
		console.log(data)
        setisLoading(false)
		setData(data)
		
	}
useEffect(()=>{
    getAllcategory()
},[])
  
return [Data,isLoading]
}

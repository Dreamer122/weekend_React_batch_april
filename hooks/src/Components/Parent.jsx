import React,{useState,useCallback} from 'react'
import { Child } from './Child'

export const Parent = () => {
    console.log("parent rendered")
        const [count,setCount]=useState(0)
        const [data,setData]=useState(0)

       const check= useCallback((data)=>{
            console.log("check function",data)
        },[data])
       
    
  return (
   <>
   <h1> Parent</h1>
    <button onClick={()=>{
        console.log("button clicked")
        setCount(count+1)}}>increase</button> <h2> {count}</h2>
   <input type='number' value={data} onChange={(e)=>setData(Number(e.target.value))}></input>
        
   <h2> Child</h2>
   {/*  */}
   <Child x={data} check={check}/>
   </>
  )
}

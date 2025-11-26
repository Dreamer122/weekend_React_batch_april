import React, { useState,useMemo } from 'react'

export const Memohook = () => {
    const [count,setCount]=useState(0)
    const [data,setData]=useState(0)

    // usememohook -> value memoize
    // expensive calculation
    const fun=(x)=>{
        console.log("fun called")
        // let x=1

        for (let i=0;i<=100000000;i++){
            x+=1
        }
        return x
    }
    const v=useMemo(()=>fun(data),[data])

  return (
    <>
    <button onClick={()=>{
        console.log("button clicked")
        setCount(count+1)}}>increase</button> <h2> {count}</h2>
   <h2> {v}</h2>

   <input type='number' value={data} onChange={(e)=>setData(Number(e.target.value))}></input>

    </>

  )
}

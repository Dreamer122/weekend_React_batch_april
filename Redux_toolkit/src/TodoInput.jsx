import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './redux/todoSlice'
export const TodoInput = () => {
    const [task,setTask]=useState("")
    const dispatch=useDispatch()

    const addtask=()=>{
        dispatch(add(task))
        console.log("task added")
    }
  return (
   <>
   <div className='w-full p-3 mt-4'>
    <input type='text' placeholder='enter notes' onChange={(e)=>setTask(e.target.value)}
    className='border-b-2 border-violet-900 w-3/4 text-white outline-none'></input>
    <button className='px-3 py-2 rounded text-violet-500 font-bold bg-white mx-4' onClick={addtask}> Add Task</button>
   </div>
   </>
  )
}

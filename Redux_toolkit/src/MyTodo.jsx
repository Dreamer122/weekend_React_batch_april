import React, { useState } from 'react'
import { TodoInput } from './TodoInput'
import { useSelector } from 'react-redux'
import  {remove,update} from "./redux/todoSlice"
import { useDispatch } from 'react-redux'
export const MyTodo = () => {
  const {todos}=useSelector((state)=>state.todo)
  const [isEdit,setIsEdit]=useState("")
  const [editText,setEditText]=useState("")
  // console.log(todos)
  const dispatch=useDispatch()
  const removetodo=(id)=>{
    const a=confirm("are you sure?")
    if(a){

      dispatch(remove(id))
    }
  }

  // update function
  const editfun=(todo)=>{
    setIsEdit(todo.id)
    setEditText(todo.text)
  }
  const updatetodo=(id)=>{
    dispatch(update({id,editText}))
    setIsEdit("")
    setEditText("")

  }

  // edit -> click ->  edit(id), edittext-text
  return (
   <>
   <div className='h-auto bg-violet-500 w-1/2 mx-auto rounded p-4 m-2'>
   <h2 className='text-white font-bold text-center my-3 text-3xl'> TODO APP</h2>
<TodoInput/>
<div className='px-4 bg-violet-400 py-4'>
  {
    todos?.map((obj,index)=>{
      return (
        <div key={obj.id} className='border-b-2 border-violet-950 text-white mb-4 p-3 m-auto capitalize '> 
        <div className='flex justify-between'>
          {
            isEdit==obj.id?<input type='text' value={editText} className='border' onChange={(e)=>setEditText(e.target.value)}></input>: <p>{obj.text}</p>
          }
         
          <div>

         {isEdit==obj.id? <button className='px-4 py-2 bg-green-600  rounded ' onClick={()=>updatetodo(obj.id)}>save</button>:
          <button className='px-4 py-2 bg-violet-950  rounded ' onClick={()=>editfun(obj)}>edit</button> }

            <button onClick={()=>removetodo(obj.id)} className='bg-red-600 text-white rounded px-4 py-2'>delete</button>
          </div>
        </div>
        </div>
      )
    })
  }
</div>


   </div>
   </>
  )
}

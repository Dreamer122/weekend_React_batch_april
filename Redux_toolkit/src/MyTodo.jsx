import React from 'react'
import { TodoInput } from './TodoInput'
export const MyTodo = () => {
  return (
   <>
   <div className='h-[90vh] bg-violet-500 w-1/2 mx-auto rounded p-4 m-2'>
   <h2 className='text-white font-bold text-center my-3 text-3xl'> TODO APP</h2>
<TodoInput/>

   </div>
   </>
  )
}

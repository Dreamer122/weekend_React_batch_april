import React from 'react'

<<<<<<< HEAD
export const Card = () => {
  return (
    <>
    
    <div className='card'>
        <img src="" alt="" />
        <p>title</p>
        <p>price</p>

        </div>
        </>
=======
export const Card = (props) => {
    const {cat}=props
  return (
   <>
   <div className='w-xs h-28 bg-slate-100 shadow rounded p-3 text-center mb-3'>
  
    <p className='text-3xl mt-4'>{cat.name}</p>

   </div>
   </>
>>>>>>> 40ab9c9b687f448a3cc7e21e751c88d86db656d6
  )
}

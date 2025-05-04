import React from 'react'

export const Card = (props) => {
    const {cat}=props
  return (
   <>
   <div className='w-xs h-28 bg-slate-100 shadow rounded p-3 text-center mb-3'>
  
    <p className='text-3xl mt-4'>{cat.name}</p>

   </div>
   </>
  )
}

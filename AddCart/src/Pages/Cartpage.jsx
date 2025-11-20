import React,{useContext} from 'react'
import { Mycontext } from '../context/Mycontext'

export const Cartpage = () => {
  const {CartData,inc,dec,remove}=useContext(Mycontext)
  
  return (
   
    <>
    <div>


      <h3 className='text-4xl text-center text-violet-600 py-6'> Cart</h3>
      {

        CartData?.map((obj)=>{
   return (<div className='flex flex-5 gap-5 bg-violet-100 w-3/4 p-4 m-auto ' key={obj.id} >

      <div className='w-1/5'>
        <img src={obj.image} className='h-40 w-40' />
      </div>
      <div className='w-1/5'>
        <p className=''>{obj.title}</p>
      </div>
      <div className='w-1/5'>

        <p>{obj.price}</p>

      </div>
      <div className='w-1/5'>
       <button className='bg-violet-900 text-white rounded-2xl px-5 py-2' onClick={()=>inc(obj)}>+</button>
        {obj.qty}  
        <button className='bg-violet-900 text-white rounded-2xl px-5 py-2' onClick={()=>dec(obj)}>-</button> 
      </div>

      <div>

        <button onClick={()=>remove(obj.id)} className='bg-red-500 text-white px-3 py-1 rounded-sm'>remove</button>
      </div>


    </div>
   )
        })
      }
    
    </div>

    </>
  )
}



import React from 'react'
import { useNavigate } from 'react-router'

import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const CartPage = () => {
 const obj= useContext(CartContext)
 console.log(obj.cart)
    console.log("Cartpage")
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem("login")
        alert("logout successfully")
        navigate("/")
    }
  return (
    <div>
        CartPage
<button className='border border-pink-800 text-pink-800 rounded px-3 py-2' onClick={logout}>logout</button>

<div>
  <h2 className='text-3xl text-pink-700'>{obj.cart.length>0 ?`${obj.cart.length} item in your cart`:"your cart is empty"}</h2>
</div>
<div className='w-10/12 mx-auto bg-amber-50 shadow '>

<div>
 {/* cart items */}
 

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product image
                </th>
                <th scope="col" className="px-6 py-3">
                     Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {
            obj.cart.length==0?<tr><td className='text-3xl'>add items in cart </td></tr>:
            obj.cart?.map((item,index)=>{

          return(
            <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 <img src={item.thumbnail} alt="" />
                </th>
                <td className="px-6 py-4">
                    {item.title}
                </td>
                <td className="px-6 py-4">
                    <button className='bg-pink-800 text-white rounded px-3 py-1' onClick={()=>obj.quantity(item,1)}>+</button>
                    <span className='text-lg mx-3'>{item.qty}</span>
                    <button className='bg-pink-800 text-white rounded px-3 py-1' onClick={()=>obj.quantity(item,-1)}>-</button>
                </td>
                <td className="px-6 py-4">
                    {item.price}
                </td>
                <td className="px-6 py-4">
                    <button  className="font-medium text-white bg-red-700 px-3 py-2 rounded">remove</button>
                </td>
            </tr>
          )
              })
          }
            
        </tbody>
    </table>
</div>

</div>

  </div>    
    </div>
  )
}

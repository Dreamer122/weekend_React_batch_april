import React from 'react'
import { useNavigate } from 'react-router'

export const CartPage = () => {
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

    </div>
  )
}

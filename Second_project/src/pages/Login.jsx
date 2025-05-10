import React from 'react'

export const Login = () => {
  const loggedIn=()=>{
    localStorage.setItem("login","true")
    alert("login successfully")
  }
  return (
    <>
    <h2 className='text-3xl text-pink-800 text-center font-bold my-4'>LOGIN</h2>
   <button className='py-3 px-4 ms-44 rounded text-white bg-pink-800' onClick={loggedIn}>login</button> <br />
    </>
  )
}

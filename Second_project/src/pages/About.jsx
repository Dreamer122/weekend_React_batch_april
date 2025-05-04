import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router';
export const About = () => {
  const [isloggedin,setisLoggedin]=useState(false);
  const navigate=useNavigate();
  const checklogin=()=>{
    if(isloggedin){
      // blog
      navigate("/blog")
    }
    else{
      // login page
      navigate("/login")
    }
  }
  return (
    <div className='text-center'>
        {/* <Navbar/> */}
<button onClick={()=>{
  setisLoggedin(!isloggedin)
 alert("logged in"+isloggedin)
  }} 
  className=' cursor-pointer py-2 px-4 rounded bg-pink-700 text-white my-3'> click to login </button> <br />
<button onClick={checklogin} className=' cursor-pointer py-2 px-4 rounded bg-pink-700 text-white '> blogs </button>
        About

    </div>
  )
}

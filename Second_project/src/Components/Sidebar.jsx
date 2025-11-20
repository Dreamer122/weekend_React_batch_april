import React from 'react'
import { MdPerson3, MdPerson4 } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import {Link} from "react-router"
export const Sidebar = () => {

const sidebarlinks=[
    {text:"Men fashion", icon:<MdPerson4 />,path:""},
    {text:"Women fashion", icon:<MdPerson3 />,path:"womenfashion"},
    {text:"kids fashion", icon:<FaChildren />,path:"kidsfashion"},
]

  return (
    <>
    <div className='h-screen w-full p-4 rounded bg-indigo-700 text-white'>
        <div >
            <h2 className='text-lg text-gray-100 font-semibold border-b border-gray-200 mb-3 py-4'>Fashion blogs</h2>
        </div>
        <div>
            <ul>
               {
                sidebarlinks.map((obj,index)=>{
                    return(
                     <Link to={obj.path} className='' key={index}>   <li className='flex mt-1 text-lg hover:bg-indigo-600 py-2 '><span className='relative top-1 mx-2'> {obj.icon} </span>{obj.text} </li></Link>
                    )
                })
               }
            </ul>
        </div>

    </div>
    </>
  )
}

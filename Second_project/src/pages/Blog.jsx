import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Outlet } from 'react-router'

export const Blog = () => {
  return (
 <>
 <div className='flex w-full'>
<div className='sidebar w-1/4 overflow-y-scroll sticky left-0 top-20'>
<Sidebar/>
</div>
<div className='maindiv overflow-y-scroll w-3/4 bg-gray-100 h-screen'>
<Outlet/>

</div>
 </div>
 </>
  )
}

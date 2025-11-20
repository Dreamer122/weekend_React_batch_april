import React, { useEffect, useState ,useRef} from 'react'
import { Link } from 'react-router'
import { Card } from '../Components/Card'
import { LodingCard } from '../Components/LodingCard'
import { useCallApi } from '../util/useCallApi'

export const Home = () => {
	// const [categorydata,setCategoryData]=useState([])
	// const [isLoading,setisLoading]=useState(false)
const inputref=	useRef()
const newref=useRef(0)
console.log(newref)
const focusoninput=()=>{
	inputref.current.value="hello"
	inputref.current.focus()
	// inputref.current.style.backgroundColor="green"
	// newref.current.innerHTML="this is use ref hook in react"
	console.log( inputref.current.type)
}

	// const getAllcategory=async()=>{
	// 	setisLoading(true)
	// 	const res=await fetch('https://dummyjson.com/products/categories')
	// 	const data=await res.json()
	// 	console.log(data)
	// 	setisLoading(false)
	// 	setCategoryData(data)
	// }

const [categorydata,isLoading]=	useCallApi('https://dummyjson.com/products/categories')
	useEffect(()=>{
		// getAllcategory()
		focusoninput()
	},[])
  return (
   
 <>
 <div className=''>
	<h1 >Home</h1>
	<div className=' w-1/2 m-auto text-center'>
		<input type="text" name='searchbar' ref={inputref} placeholder='search by category'  className='h-12 w-3/4 bg-pink-200 text-pink-800'/> <button className='px-4 py-3 bg-pink-800 text-white'>search category</button>
	</div>
 </div>

 <div>
	<h3 className='text-4xl text-indigo-700 my-4'>Shop by category</h3>
	<div className='flex flex-wrap justify-around'>

{
	isLoading?  Array.from({ length: 10 }).map((i)=><LodingCard/>):
categorydata?.map((cat,index)=>{
	return(
	<Link  key={index} to={`/productpage/${cat.slug}`}>	<Card cat={cat}></Card></Link>
	)

})

}
	</div>
 </div>
 </>
  )
}

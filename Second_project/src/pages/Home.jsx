import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Card } from '../Components/Card'
import { LodingCard } from '../Components/LodingCard'

export const Home = () => {
	const [categorydata,setCategoryData]=useState([])
	const [isLoading,setisLoading]=useState(true)

	const getAllcategory=async()=>{
		setisLoading(true)
		const res=await fetch('https://dummyjson.com/products/categories')
		const data=await res.json()
		console.log(data)
		setisLoading(false)
		setCategoryData(data)
	}
	useEffect(()=>{
		getAllcategory()
	},[])
  return (
   
 <>
 <div className=''>
	<h1>Home</h1>
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

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Card } from '../Components/Card'

export const Home = () => {
	const [categorydata,setCategoryData]=useState([])

	const getAllcategory=async()=>{
		const res=await fetch('https://dummyjson.com/products/categories')
		const data=await res.json()
		console.log(data)
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

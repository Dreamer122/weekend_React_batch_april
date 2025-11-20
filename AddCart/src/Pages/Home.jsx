import React,{useState,useEffect} from 'react'
import { Card } from '../Components/Card'
import { PrdDesc } from './PrdDesc'

export const Home = () => {
   
    const [products,setProducts]=useState([])


// api call

const getallprd= async()=>{
    const res=await fetch("https://fakestoreapi.com/products")
    const data=await res.json()
    // console.log(data)
    setProducts(data)

}
useEffect(()=>{
    getallprd()
},[])


  return (
    <>
    <div className='flex flex-3 flex-wrap justify-center gap-5'>

        {
            products?.map((obj)=>{
                obj.qty=1
                return <Card key={obj.id} obj={obj}/>
            })
        }

    </div>

{/* <h2> product desc</h2>
<PrdDesc x="6"><Card></Card></PrdDesc> */}
    
    </>
  )
}

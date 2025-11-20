 import Card from "./Card"
 import "./App.css"
 import { useState,useEffect } from "react"
 import { Header } from "./Header"
 import { Footer } from "./Footer"



 function App(){
  console.log("app component starts")

  const product=[
    {name:"mountains",category:"Travel",image:"https://plus.unsplash.com/premium_photo-1681711647066-ef84575c0d95?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",},
    {name:"Dessert",category:"Travel",image:"https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-3d-beauty-cosmetics-product-design-png-image_3350323.jpg",},
    {name:"Indian cuisine",category:"food",image:"https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png"},
    {name:"Women wear",category:"clothes",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q6wZPYuvZhXPCbo42ZYPzc-N9s4eHmkQvw&s"},
   
  ]
//  variable ->
// let a=10;
// const updatevalue=()=>{
//   console.log("before updating",a)
//   a=11
//   console.log("after updating",a)
// }

// hooks are just normal functions

const [x,setX]=useState(10)
const [searchText,setSearchText]=useState("")
const [filterdata,setFilterData]=useState(product)
const [alldata,setAlldata]=useState([])
// const [a,setA]=useState(10)
// it return two things variable , function 
const updatevalue=()=>{
    setX(x+1)
  }

  const searchData=()=>{
    console.log(searchText)
    const filterdata=alldata.filter((items,index)=>{
      return items.category.toLowerCase().includes(searchText.toLowerCase())
    })
    // console.log(filterdata)
    setFilterData(filterdata)

  }

  // call api

 const getdata=async ()=>{
   const resp=await fetch("https://fakestoreapi.com/products");
   const data=await resp.json()
   console.log(data)
   setAlldata(data)
   setFilterData(data)
  }
 

  useEffect(()=>{
    getdata()
    console.log("useEffect called")
  },[])

  console.log("component rendered")

  return (
    <>
    
    <Header/>
    <div className="search-bar">
      <input type="search" name="search" id="search"
      
       onChange={(e)=>{
        // console.log(e.target.value)
        setSearchText(e.target.value)
        }} />
        <button onClick={searchData}>searchtext</button>
    </div>
    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
    {
      filterdata.map((value,index)=>{
        return(
          // <Card name={value.name}
          //  category={value.category}  image={value.image} key={index}/>
          <Card {...value} key={index}/>
        )

      })
    }

    
    </div>
    <p> {x}</p>
    <button onClick={updatevalue}>click me</button>
    
    <Footer/>
    </>
  )
}
export default App

// Card("mountains")
// react component
// functional component ---- class components




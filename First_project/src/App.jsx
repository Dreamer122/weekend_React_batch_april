 import Card from "./Card"
 import "./App.css"



 function App(){

  const product=[
    {name:"mountains",category:"Travel"},
    {name:"Dessert",category:"Travel"},
    {name:"Indian cuisine",category:"food"},
    {name:"Women wear",category:"clothes"},
   
  ]
  return (
    <>
    
    <Header/>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    {/* <Card name={product[0].name} category={product[0].category}/>  */}
    {/* props */}
    {/* <Card name={product[1].name} category={product[1].category}/>
    <Card name={"indian cuisine"} category={"food"}/>
    <Card name={"women wear"} category={"clothes"}/> */}

    {
      product.map((value,index)=>{
        return(
          <Card name={value.name}
           category={value.category} key={index}/>
        )

      })
    }
    
    </div>
    
    <Footer/>
    </>
  )
}
export default App

// Card("mountains")
// react component
// functional component ---- class components
export function Header(){
  
const Name="Myapp"
const a=10
const b=20

  return(
    //  react fragment
    <>
   
      {/* <h1>{Name}</h1> */}
      <nav className="list">
        <ul>
          <li>HOme</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    <h3>
      jsx - javascript xml
      {
        a+b
      }
    </h3>
    </>
  )

}


export function Footer(){
  return (
    <h2> Footer</h2>
  )
}
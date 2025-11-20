import React from "react"
import { BrowserRouter,Route,Routes}  from "react-router-dom"
import { Home } from "./Pages/Home"
import { Cartpage } from "./Pages/Cartpage"
import { PrdDesc } from "./Pages/PrdDesc"
import { Layout } from "./Pages/Layout"
function App(){


  

  return (
    <>
    <BrowserRouter>
    <Routes>
      

      <Route path="/" element={<Layout  />}>
      <Route path="" index element={<Home />}/>

      <Route path="/product/:id" element={<PrdDesc/>}/>
      <Route path="/Cart" element={<Cartpage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App
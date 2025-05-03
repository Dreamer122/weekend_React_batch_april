import Navbar from "./Components/Navbar"
import { Home } from "./pages/Home";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import Footer from "./Components/Footer";
import { Login } from "./pages/Login";
import { ProductBycategory } from "./pages/ProductBycategory";
import { PrdDesc } from "./pages/PrdDesc";
function App(){
  return (
    <>
    <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/productpage/:category" element={<ProductBycategory/>}/> 
      {/* dynamic route */}
      <Route path="/productpage/:category/productdescription/:id" element={<PrdDesc/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}
export default App
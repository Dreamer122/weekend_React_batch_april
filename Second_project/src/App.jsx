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
import { Men } from "./pages/Blogspages/Men";
import { CartPage } from "./pages/CartPage";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import {Toaster} from "react-hot-toast"
function App(){
  
  return (
    <>
    <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Blog" element={ <ProtectedRoute><Blog/></ProtectedRoute>}>  
      <Route index element={<Men/>}/>
      <Route path="womenfashion" element={<h1>womenfashion </h1>}/>
      <Route path="kidsfashion" element={<h1>kids fashion </h1>}/>
      </Route>

      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
      <Route path="/productpage/:category" element={<ProductBycategory/>}/> 
      {/* dynamic route */}
      <Route path="/productpage/:category/productdescription/:id" element={<PrdDesc/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    <Toaster></Toaster>
    
    </>
  )
}
export default App
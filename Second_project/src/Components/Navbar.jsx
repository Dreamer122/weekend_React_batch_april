import { NavLink } from "react-router"
import { useOnline } from "../util/useOnline"
import { CartContext } from "../Context/CartContext"
import { useContext } from "react"
function Navbar(){
    const {cart}=useContext(CartContext)
    const online=useOnline()
    return (
        <>
       <div className="nav">
        <div className="left">
            <div className="logo">Logo</div>
        </div>
        <div className="right">
            <ul>
                <li> <NavLink to="/"> Home </NavLink></li>
                <li> <NavLink to="/about"> about </NavLink></li>
                <li> <NavLink to="/contact"> contact </NavLink></li>
                <li> <NavLink to="/Blog"> Blog </NavLink></li>
                <li> <NavLink to="/cart"> cart <span>{cart.length}</span> </NavLink></li>
                <li> <NavLink to="/login"> login </NavLink></li>
                <li> { online?"🟢":"🔴"
                    } </li>

               
            </ul>
        </div>
       </div>

        </>
    )

}
export default Navbar
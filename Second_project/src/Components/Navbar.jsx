import { NavLink } from "react-router"
function Navbar(){
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
               
            </ul>
        </div>
       </div>

        </>
    )

}
export default Navbar
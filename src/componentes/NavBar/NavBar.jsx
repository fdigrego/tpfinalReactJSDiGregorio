import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <header>
        <Link className="pl-6 grid grid-flow-col" to={"/"}>
          <img className="w-20" src="../images/logo.png"></img>
          <h1 className="text-3xl text-thin text-blue-700 ml-1">Online</h1>
        </Link>
        <nav>
          <ul>
            <li className="text-xl text-thin text-gray-400 hover:text-blue-700 hover:font-bold">
              <NavLink to={`/categoria/1`}>Lácteos</NavLink>
            </li>
            <li className="text-xl text-thin text-gray-400 hover:text-blue-700 hover:font-bold">
              <NavLink to={`/categoria/2`}>Bebidas</NavLink>
            </li>
            <li className="text-xl text-thin text-gray-400 hover:text-blue-700 hover:font-bold">
              <NavLink to={`/categoria/3`}>Almacén</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
      <hr className="pl-6 pr-6 mt-4 mb-4" />
    </>
  )
}

export default NavBar

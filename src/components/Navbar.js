
import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <header>
        <nav>
        <NavLink to="/">Domů</NavLink>
        <NavLink to="all-products">Produkty</NavLink>
        <NavLink to="form">Přidání produktů</NavLink>
        </nav>

  </header>
}

export default Navbar
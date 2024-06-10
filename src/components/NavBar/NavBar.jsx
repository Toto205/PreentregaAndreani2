import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg" className="NavBar">
      <Container>
      <Link to='/' className="links">
        <h3>ReactStore !</h3>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto links">
            <ul className="menu">
              <li>
                <NavLink to={`/category/zapatillas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
              </li>
              <li>
                <NavLink to={`/category/lentes`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lentes</NavLink>
              </li>
              <li>
                <NavLink to={`/category/gorras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gorras</NavLink>
              </li>
            </ul>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar;

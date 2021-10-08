import React, {useState} from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'
import logo1 from '../../Images/Logo1.png';

const NavBar = () => {
    const [hamburger, setHamburger] = useState(false);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="./home"><img src={logo1} alt="" style={{width: "40%",marginLeft:"0.5vw"}}/></Navbar.Brand>
            
           
           
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="./doctor" style={{ color:"white" }}>Doctor</Nav.Link>
                    <Nav.Link href="./about">About Us</Nav.Link>
                    <Nav.Link href="./resources">Resources</Nav.Link>
                    <Nav.Link href="./contact">Contact</Nav.Link>
                    <Nav.Link href="./donate">Donate</Nav.Link>
                    <Nav.Link href="./login"><Button style={{backgroundImage: "linear-gradient(yellow,lightgreen)", color:"black", borderRadius:"15px" }}>Login</Button></Nav.Link>
                    
           
                </Nav>

            </Navbar.Collapse>
            <div
                    id="nav-ham"
                    className={`${hamburger && "Diam"}`}
                    onClick={() => setHamburger(!hamburger)}>
                    <div className="ham top"></div>
                    <div className="ham middle"></div>
                    <div className="ham bottom"></div>
                </div>
                 {/* Hidden hamburger menu nav */}
          <div className={`hiddenNav ${hamburger && "hamburgerOpen"}`}>
        <nav className="hiddenNavSearch-user">
          <ul className="hamburger-menu">
            <li className="hamburger-menu-item">
              <NavLink to="/" className="hm-hover1">
                Home
              </NavLink>
            </li>
            <li className="hamburger-menu-item">
              <NavLink to="/about" className="hm-hover2">
                About Us
              </NavLink>
            </li>
            <li className="hamburger-menu-item">
              <NavLink to="/services" className="hm-hover3">
                Our Services
              </NavLink>
            </li>
            <li className="hamburger-menu-item">
              <NavLink to="/contact" className="hm-hover4">
                Contact Us
              </NavLink>

            </li>
            <li className="hamburger-menu-item">
              <NavLink to="/contact" className="hm-hover4">
                Contact Us
              </NavLink>

            </li>
          </ul>
        </nav>
        </div>
        </Navbar>
    );
};

export default NavBar;
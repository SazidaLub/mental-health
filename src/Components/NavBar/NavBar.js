import React, { useContext, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'
import logo1 from '../../Images/Logo1.png';
import Grid from '@material-ui/core/Grid';
import { UserContext } from '../../App';

const NavBar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [loggedInUser, setLoggedInUser]=useContext(UserContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      {/* navbar er logo ta   */}
      <Navbar.Brand href="./home"><img src={logo1} alt="" style={{ width: "40%", marginLeft: "0.8vw" }} /></Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto navDesign">
          {/* full screen er navlink gula */}
          <Nav.Link href="./home" style={{ color: "white" }}>Home</Nav.Link>
          <Nav.Link href="./doctors" style={{ color: "white" }}>Doctors</Nav.Link>
          <Nav.Link href="./appointment" style={{ color: "white" }}>Appointment</Nav.Link>
          <Nav.Link href="./resources" style={{ color: "white" }}>Resources</Nav.Link>
          <Nav.Link href="./side" style={{ color: "white" }}>DashBoard</Nav.Link>
          <Nav.Link href="./donate" style={{ color: "white" }}>Donate</Nav.Link>
          <Nav.Link href="./side" style={{ color: "white" }}><Button style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", font: "",width:"auto" }}>Login: {loggedInUser ? loggedInUser.name : "Login"}</Button></Nav.Link>

        </Nav>
      </Navbar.Collapse>
      {/* right side er bar gula hamburger types segula */}
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
          <Grid container spacing={3} style={{ marginTop: "2%" }}>
            {/* column hishebe prothom ta */}
            <Grid item xs={6} sm={6} md={6}>
              <ul className="hamburger-menu">
                <li className="hamburger-menu-item">
                  <NavLink to="/" className="hm-hover1">
                    Home
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/doctors" className="hm-hover1">
                    Doctors
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/blog" className="hm-hover2">
                    Blog
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/resources" className="hm-hover2">
                    Resources
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/contact" className="hm-hover3">
                    Contact
                  </NavLink>

                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/donate" className="hm-hover3">
                    Donate
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/about" className="hm-hover4">
                    About Us
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/survey" className="hm-hover4">
                    Survey
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/projects" className="hm-hover1">
                    Projects
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/side" className="hm-hover4">
                    Add Review
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <Nav.Link href="./login" className="hm-hover4"><Button style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", fontFamily: "Secular One" }}>Login</Button></Nav.Link>
                </li>
              </ul>
            </Grid>
            {/* column hishebe second ta */}
            <Grid item xs={6} sm={6} md={6}>
              <ul className="hamburger-menu">
                
                <li className="hamburger-menu-item">
                  <NavLink to="/stories" className="hm-hover1">
                    Our Stories
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/news" className="hm-hover2">
                    News Portal
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/appointment" className="hm-hover2">
                    Appointment
                  </NavLink>
                </li>
               
                <li className="hamburger-menu-item">
                  <NavLink to="/privacy" className="hm-hover3">
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/definition" className="hm-hover3">
                    What to look for
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/awareness" className="hm-hover4">
                    Mental Health Awareness
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/community" className="hm-hover4">
                    Community Activities
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/dayWeek" className="hm-hover4">
                    Mental Health Day Week
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/side" className="hm-hover4">
                    Apply for volunteering
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/country" className="hm-hover4">
                    Steps taken by different countries
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/covid" className="hm-hover4">
                    Covid-19 affect on mental health
                  </NavLink>
                </li>
                <li className="hamburger-menu-item">
                  <NavLink to="/side" className="hm-hover4">
                    Apply for local summit
                  </NavLink>
                </li>
              </ul>
            </Grid>
          </Grid>
        </nav>
      </div>
    </Navbar>
  );
};

export default NavBar;
import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import footerLogo from '../../Images/FooterLogo.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../Footer/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { db } from '../Contact/firebase'

const Footer = () => {
  // initially state niye rkhtesi. pore eita niye kaj korar jonno
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    console.log("clicked")
    // firebase database  a updates name a ekta collection create hoye name,email,message gula save hoar kaj
    db.collection("updates")
      .add({
        email: email,
      })
      .then(() => {
        setLoader(false);
        alert("Your email has been submitted 👍. You will get the updates through mail");
         // msg submit button a click korle eita show korbe
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setEmail("");
  };
  return (
    <div>
      <div className="bg-white">
     
        {/* <Grid item xs={5} sm={5} md={5}> */}
        <form onSubmit={handleSubmit} className="footerInput">
        <a href="https://www.facebook.com" target="_blank"><FacebookIcon color='inherit' style={{ fontSize: 50, color:"#4267B2",margin:"10px" }}/></a>
        <a href="https://www.instagram.com" target="_blank"><InstagramIcon color='inherit' style={{ fontSize: 50, color: "#fbad50" ,margin:"10px"}}/></a>
        <a href="https://www.twitter.com" target="_blank"><TwitterIcon color='inherit' style={{ fontSize: 50, color:"#00acee" ,margin:"10px"}}/></a>
        <a href="https://pininterest.com" target="_blank"><PinterestIcon color='inherit' style={{ fontSize: 50, color:"#c8232c" ,margin:"10px"}}/></a>
        <a href="https://www.youtube.com" target="_blank"><YouTubeIcon color='inherit' style={{ fontSize: 50, color:"#c4302b" ,margin:"10px"}}/></a>
        <input type="email" placeholder="Enter Your Email Here to get updates" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
       
       
        <button type="submit" style={{ backgroundImage: loader ? "#ccc" : "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", padding: "15px",border: "none", fontWeight: "500", fontSize: "20px" }}> Submit </button>
        </form>
       
    
       
      </div>
    <div className="bg-dark p-3" fixed="bottom">
      <Grid container spacing={2} style={{ marginTop: "2%", width: "100%" }}>
        <Grid item xs={12} sm={4} md={4}>
          <ul className="list-unstyled mt-4 align-items-center">

            <li><Link to="/" className="ListDesign"> Home</Link></li>

            <li className="pt-1"><Link to="/doctors" className="ListDesign"> Doctors </Link></li>

            <li className="pt-1"> <Link to="/blog" className="ListDesign"> Blog</Link></li>

            <li className="pt-1"><Link to="/resources" className="ListDesign">Resources</Link></li>

            <li className="pt-1"><Link to="/contact" className="ListDesign"> Contact </Link> </li>

            <li className="pt-1"> <Link to="/privacyPolicy" className="ListDesign"> Privacy Policy </Link> </li>

            <li className="pt-1"><Link to="/details" className="ListDesign"> What to look for </Link></li>

            <li className="pt-1"><Link to="/covid" className="ListDesign"> Covid-19 affect on mental health </Link></li>

            <li className="pt-1"><Link to="./login"><Button style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", fontFamily: "Secular One", marginLeft: "30px" }}>Login</Button></Link></li>

          </ul>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <img src={footerLogo} alt="" style={{ width: "100%" }} />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <ul className="list-unstyled mt-4 align-items-center">

            <li className="pt-1"><Link to="/survey" className="ListDesign">Survey</Link></li>

            <li className="pt-1"><Link to="/about" className="ListDesign">About Us</Link></li>

            <li className="pt-1"><Link to="/donate" className="ListDesign">Donate</Link></li>

            <li><Link to="/projects" className="ListDesign">Projects</Link></li>

            <li className="pt-1"><Link to="/stories" className="ListDesign">Our Stories</Link></li>

            <li className="pt-1"><Link to="/newsPortal" className="ListDesign"> News Portal</Link></li>

            <li className="pt-1"><Link to="/appointment" className="ListDesign"> Appointment </Link></li>


            <li className="pt-1"> <Link to="/awareness" className="ListDesign"> Mental Health Awareness </Link></li>

            <li className="pt-1"> <Link to="/country" className="ListDesign"> Steps taken by different countries </Link> </li>

          </ul>
        </Grid>
      </Grid>
      <div className="copyRight text-center">
        {/* year ta calendar onujai change hbe */}
        <p>Copyright @{(new Date()).getFullYear()} All Rights Reserved to YouMatter</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
import './App.css';
import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Books from './Components/Books/Books';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Doctors from './Components/Doctors/Doctors';
import AddAbout from './Components/Admin/AddAbout/AddAbout';
import AddBlog from './Components/User/AddBlog/AddBlog';
import Blogs from './Components/Blogs/Blogs';
import AddProject from './Components/Admin/AddProjects/AddProject';
import Projects from './Components/Projects/Projects';
import AddSurvey from './Components/Admin/AddSurvey/AddSurvey';
import Survey from './Components/Survey/Survey';
import AddNews from './Components/Admin/AddNews/Addnews';
import News from './Components/News/News';
import AddPrivacy from './Components/Admin/AddPrivacy/AddPrivacy';
import Privacy from './Components/Privacy/Privacy';
import AddDefinition from './Components/Admin/AddDefinition/AddDefinition';
import Definition from './Components/Definition/Definition';
import AddAwareness from './Components/Admin/AddAwareness/AddAwareness';
import Awareness from './Components/Awareness/Awareness';
import AddCountry from './Components/Admin/AddCountry/AddCountry';
import Country from './Components/Country/Country';
import AddCovid from './Components/Admin/AddCovid/AddCovid';
import Covid from './Components/Covid/Covid';
import AddDonate from './Components/Admin/AddDonate/AddDonate';
import Donate from './Components/Donate/Donate';
import Side from './Components/side/Side';
import Stories from './Components/Stories/Stories'
import AddReviews from './Components/User/AddReview/AddReview';
import Reviews from './Components/Reviews/Reviews';
import AddPlan from './Components/User/AddPlan/AddPlan';
import Plan from './Components/Plan/Plan';
import AddCommunity from './Components/Admin/AddCommunity/AddCommunity';
import Community from './Components/Community/Community';
import AddVolunteer from './Components/User/AddVolunteer/AddVolunteer';
import Volunteer from './Components/Volunteer/Volunteer';
import AddDayWeek from './Components/Admin/AddDayWeek/AddDayWeek';
import DayWeek from './Components/DayWeek/DayWeek';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
       <Navbar/>
        <h4>{loggedInUser.name}</h4>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/side">
            <Side></Side>
          </PrivateRoute>
          {/* <Route path="/side">
            <Side></Side>
          </Route> */}




          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/resources">
            <Books></Books>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/addAbout">
            <AddAbout></AddAbout>
          </Route>
          <Route path="/addBlogs">
            <AddBlog></AddBlog>
          </Route>
          <Route path="/blog">
            <Blogs></Blogs>
          </Route>
          <Route path="/addProjects">
            <AddProject></AddProject>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/addSurvey">
            <AddSurvey></AddSurvey>
          </Route>
          <Route path="/survey">
            <Survey></Survey>
          </Route>

          <Route path="/addNews">
            <AddNews></AddNews>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>


          <Route path="/addPrivacy">
            <AddPrivacy></AddPrivacy>
          </Route>
          <Route path="/privacy">
            <Privacy></Privacy>
          </Route>


          <Route path="/addDefinition">
            <AddDefinition></AddDefinition>
          </Route>
          <Route path="/definition">
            <Definition></Definition>
          </Route>


          <Route path="/addAwareness">
            <AddAwareness></AddAwareness>
          </Route>
          <Route path="/awareness">
            <Awareness></Awareness>
          </Route>


          <Route path="/addCountry">
            <AddCountry></AddCountry>
          </Route>
          <Route path="/country">
           <Country></Country>
          </Route>


          <Route path="/addCovid">
            <AddCovid></AddCovid>
          </Route>
          <Route path="/covid">
           <Covid></Covid>
          </Route>


          <Route path="/addDonate">
            <AddDonate></AddDonate>
          </Route>
          <Route path="/donate">
           <Donate></Donate>
          </Route>


          <Route path="/stories">
            <Stories></Stories>
            </Route>


            <Route path="/addReviews">
            <AddReviews></AddReviews>
          </Route>
          <Route path="/reviews">
           <Reviews></Reviews>
          </Route>


          <Route path="/addPlan">
            <AddPlan></AddPlan>
          </Route>
          <Route path="/plan">
           <Plan></Plan>
          </Route>



          <Route path="/addCommunity">
            <AddCommunity></AddCommunity>
          </Route>
          <Route path="/community">
           <Community></Community>
          </Route>



          <Route path="/addVolunteer">
            <AddVolunteer></AddVolunteer>
          </Route>
          <Route path="/volunteer">
           <Volunteer></Volunteer>
          </Route>


          <Route path="/addDayWeek">
            <AddDayWeek></AddDayWeek>
          </Route>
          <Route path="/dayWeek">
           <DayWeek></DayWeek>
          </Route>


          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <PrivateRoute path="/addProducts">
            </PrivateRoute> */}
        </Switch>
        <Footer/>
      </Router>
     </UserContext.Provider>
  );
}

export default App;

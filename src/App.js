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

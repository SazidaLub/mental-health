import './App.css';
import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Navbar from './Components/NavBar/NavBar';
// import Home from './Components/Home/Home';
// import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


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
            {/* <Home></Home> */}
          </Route>
          <Route path="/login">
            {/* <Login></Login> */}
          </Route>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
          <PrivateRoute path="/addProducts">
            </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

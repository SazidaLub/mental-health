import React from 'react';
// import './App.css';
//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css';
//Calling Firebase config setting to call the data
import firebaseConfig from '../Login/firebase.config';
import firebase from "firebase/app";
import "firebase/auth";

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

class App extends React.Component {
constructor(props) {
    
    super(props);
   
    this.state = {contacts : []}
    }
    
  componentDidMount() {
   
   
     
      firebase.database().ref("contacts").on("value", snapshot => {
        let contacts = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'contacts' path
            contacts.push(snap.val());
        });
        this.setState({ contacts: contacts });
      });
    
    
 }
  
  render(){
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center bg-sky">
          <h3>Contact Page</h3>
      </div>
    
      <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
            {this.state.contacts.map(data => {
                
                return (
                    <tr>     
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.message}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
          
     </div>
    </div>
  );
}
}
export default App;
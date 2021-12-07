import React, { useContext, useState } from 'react';
import { UserContext } from "../../App";
import "firebase/auth";
import './Login.css';
import background from '../../Images/loginBack.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from "react-router";
import { createUserWithEmailAndPassword, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';

const Login = () => {
    const { register,  formState: { errors } } = useForm();
    const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res,true);
      })
  }

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
      console.log(loggedInUser);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmitt = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res,true);
          alert("Created")
        })
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res,true);
          alert("Not Created")
        })
    }
    e.preventDefault();
  }
    return (
      <div style={{ backgroundImage: `url(${background})` }}>
        <div className="loginPage" >    
            <h1>{newUser ? 'Sign Up' : 'Login'}</h1>
            <form onSubmit={handleSubmitt} className="ship-form">
                {newUser && < input placeholder="Your Name" {...register("name", { required: true })} onBlur={handleBlur} />}
                {errors.name && <span className="error">Name is required</span>}
                <br />
                < input placeholder="Your Email" {...register("email", { required: true })} onBlur={handleBlur} />
                {errors.email && <span className="error">Email is required</span>}
                <br />
                < input type= "password" placeholder="Your Password" {...register('password', { required: true })} onBlur={handleBlur} />
                {errors.password && <span className="error">Password is required</span>}
                <br />
                <input type="submit" value={newUser ? 'Create an account' : 'Login'} />
                {/* <button > {newUser ? 'Create an account' : 'Login'}</button> */}
                <br />
            </form >
            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'logged in'} Successfully</p>}
            <p>--------OR---------</p>
            {
                    <button onClick={googleSignIn}><FontAwesomeIcon icon={faGoogle} /> Sign In With Google</button>
            }
            <br/>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"/>
            <label htmlFor="newUser">{newUser ? 'Already Have An Account?  Login' : "Don't have an account? Sign up"}</label>
        </div>
      </div>
        
    );
};

export default Login;
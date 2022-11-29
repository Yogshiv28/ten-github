import React, { useState } from "react"

import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


// react-router

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

// toast

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

// firebase

import firebase  from "firebase/app";
import "firebase/auth"

//component
import Home from "../src/pages/Home"
import Signin from "../src/pages/Signin"
import Signup from "../src/pages/Signup"
import PageNotFound from "../src/pages/PageNotFound"
import { UserContext } from "./Context/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Navbar";
import Firebaseconfig from "../src/Config/Firebaseconfig";


// init firebase
firebase.initializeApp(Firebaseconfig)
const  App = () => {
  const [user, setUser] = useState([null])
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user, setUser}}>

        <Header/> 

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Signin" component={Signin}/>
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="*" component={PageNotFound}/>
        
        </Switch>
        <Footer/>

      </UserContext.Provider> 
    </Router>
    
  );
}

export default App;

import React from 'react';
import "../styles/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./utils/privateRoute";
import Nav from './Nav';
import Login from './Login';
import Signup from "./SignUp";


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Router>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;

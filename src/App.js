/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.5 web-sprint-challenge-single-page-applications 
 * app.js
 * 7/23/2021
 */

//Import statements
import React, {useState, useEffect} from "react";
//import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { Route, Link, Switch} from "react-router-dom";


//App() function definition, pass in callback 
const App = () => 
{
  //Return function
  return (
    <>
      <Switch>
        <Link to = "/">Home</Link>
        <h1>Lambda Eats</h1>
        <p></p>
      </Switch>
    </>
  );
};
export default App;

/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.5 web-sprint-challenge-single-page-applications 
 * app.js
 * 7/23/2021
 **/

//Import statements
import { Route, Switch, NavLink} from "react-router-dom";
import Form from "./components/Form.js";
import Home from "./components/home";
import "./App.css";


//App() function definition, pass in callback 
const App = () => 
{
  //Return function
  return (
    <>
      {/* Main Div */}
      <div className = "head">
        <div className = "nav">
          <NavLink exact to='/'>Home</NavLink>
        </div>
        <div className = "nav">
          <NavLink to='/pizza'>Pizza</NavLink>
        </div>
          <h1 className = "h">Lambda Eats</h1>
          <h2 className = "h">Get your coding pizza here!</h2>
      </div>

      {/* Switch case */}
      <Switch>
        <Route path = "/pizza" component = {Form}/>
        <Route exact path = "/Home" component = {Home}/>
      </Switch>
    </>
  );
};

//Export statement
export default App;

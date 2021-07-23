/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.5 web-sprint-challenge-single-page-applications 
 * app.js
 * 7/23/2021
 **/

//Import statements
import { Route, Switch, NavLink} from "react-router-dom";
//import Form from "./components/Form.js";
import Home from "./components/home";


//write a named style and rename divs below

//App() function definition, pass in callback 
const App = () => 
{
  //Return function
  return (
    <>
    <div className = "head">
      <h1 className = "h">Lambda Eats</h1>
      <h2 className = "h">Get your coding pizza here!</h2>

      <NavLink exact to='/'>Home</NavLink>
      <NavLink to='/pizza'>Pizza</NavLink>
    </div>

    {/* Switch case */}
    <Switch>
      {/* <Route path = "/pizza" component = {Form}/> */}
      <Route path = "/" component = {Home}/>
    </Switch>
    </>
  );
};

//Export statement
export default App;

/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.5 web-sprint-challenge-single-page-applications 
 * app.js
 * 7/23/2021
 */

//Import statements
import { Route, Switch} from "react-router-dom";
import pizza from "./components/form";
import home from "./components/home";


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
    </div>

    {/* Switch case */}
    <Switch>
      {/* <Route path = "/pizza" component = {pizza}/>

      <Route path = "/" component = {home}/> */}

    </Switch>
    </>
  );
};
export default App;

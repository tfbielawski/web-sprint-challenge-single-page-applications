/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.5 web-sprint-challenge-single-page-applications 
 * home.js
 * 7/23/2021
 */

//Import statements
import React from "react";
import { useHistory } from "react-router-dom";


//Default Function Home definition, no params
export default function Home()
{
    //Assign useHistory function 
    const history = useHistory();

    //Define routeToShop function
    const routeToForm = () => 
    {
      //Log history
      console.log(history);

      //push the history to pizza list
      history.push("pizza");
    }

    //Return function
  return (

    //Main div
    <div className = "home-wrapper">

        {/* Image div */}
        <div className = "image">
            
            {/* Pizza photo from assets */}
            <img
            className = "home-image"
            src = "https://media.istockphoto.com/photos/homemade-veggie-pizza-with-mushrooms-peppers-picture-id842082336"
            alt = "Pizza"
            />
        </div>

      {/* Button with click invokes routToForm()*/}
        <button
        className = "shopButton"
        id = "order-pizza"
        onClick={routeToForm}
        >
        ORDER PIZZA
        </button>
    </div>
  )
}
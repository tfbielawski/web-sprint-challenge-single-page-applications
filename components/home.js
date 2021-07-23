/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.5 web-sprint-challenge-single-page-applications 
 * home.js
 * 7/23/2021
 */

//Import statements
import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from "../Assets/Pizza.jpg"

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
        history.push("pizza-list");
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
            src = {logo}
            alt = "Pizza"
            />
        </div>

      {/* Button with click invokes routToShop()*/}
        <button
        className = "shopButton"
        id = "order"
        onClick={routeToForm}
        >
        ORDER PIZZA
      </button>
    </div>
  )
}
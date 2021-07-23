


import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from "../Assets/Pizza.jpg"

//Default Function Home definition, no params
export default function Home()
{
    //Assign useHistory function 
    const history = useHistory()
    
    //Define routeToShop function
    const routeToShop = () => 
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

        {/* Pizza photo from assets */}
      <img
        className = "home-image"
        src = {logo}
        alt = "Pizza"
      />

      {/* Button with click invokes routToShop()*/}
      <button
        className = "shopButton"
        id = "order"
        onClick={routeToShop}
      >
        ORDER PIZZA
      </button>
    </div>
  )
}
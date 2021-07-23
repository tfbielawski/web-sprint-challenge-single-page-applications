/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.5 web-sprint-challenge-single-page-applications 
 * form.js
 * 7/23/2021
 */

//Import statements
import React, {useState, useEffect} from "react";
import axios from "axios";
import * as yup from "yup";
import "./Form.css"

//Main function definition, empty () param
const Form = ()  =>
{
    //Declare state variables, init to values
    const [form, setForm] = useState
    ({
        //Declare values, init as string/bool
        name: " ",
        size: " ",
        special: " ",
        meat: false,
        veggies: false,
        poultry: false,
        fruit: false,
    });

    //Declare error state variables, init to values
    const [errors, setErrors] = useState
    ({
        //Declare values init to string/bool
        name: " ",
        size: " ",
        special: " ",
        meat: false,
        veggies: false,
        poultry: false,
        fruit: false,
    });


    //Declare state variables, init to false
    const [submitButtonState, setSubmitButtonState] = useState(false);


    //Define form schema
    const formSchema = yup.object().shape
    ({
        //Name value: string, min params
        name: yup.string().min(2,"name must be at least 2 characters"),
        
        //Size value: string, oneOf params
        size: yup.string().oneOf(["s", "m", "l"], "please select a size"),
        
        //Toppings: string
        special: yup.string(),
        meat: yup.string(),
        veggies: yup.string(),
        poultry: yup.string(),
        fruit: yup.string(),
    });


    //Change handler function definition, pass in event object
    const changeValidator = (event) => 
    {
      yup
        //Reach formSchema and event
        .reach(formSchema, event.target.name)
        
        //Validate checkbox
        .validate(
          event.target.type === "checkbox" ? event.target.checked : event.target.value
        )
        
        //.then setErrors
        .then(() => 
        {
          setErrors({ ...errors, [event.target.name]: "" });
        })
        
        //.catch, log the error, set the error
        .catch((error) => 
        {
          setErrors({ ...errors, [event.target.name]: error.errors[0] });
        });
    };

     
    //formSchema useEffect
    useEffect(() => 
    {
        formSchema.isValid(form).then((isFormValid) => 
        {
          setSubmitButtonState(isFormValid);
        });

        //Dependency arrays
    }, [form]);



    //Change event handler
    const changeHandler = (event) =>
    {
        //Event.persist 
        event.persist();

        //Call change validator, pass in event
        changeValidator(event);

        //Set form
        setForm
        ({
            //Spread operator, target
            ...form, [event.target.name]: 
            event.target.type ===  "checkbox" ? event.target.checked : event.target.value
        });

    };

    //Submit handler
    const submitHandler = (event) =>
    {
        //Prevent default behavior on submit
        event.preventDefault();

        //Axios
        axios
        //Post to api with form payload
        .post("https://reqres.in/api/orders", form)
        //then get response, log changes
        .then((response) => console.log("submit changes", response));
    };
   

    //Return function
    return(
        
        // Begin form
        <form id = "pizza-form" onSubmit = {submitHandler} >
           
            <div className = "choices">
                {/* Name label and input */}
                <label className = "label" htmlFor = "name"> Name:
                    <input
                    type = "text"
                    id = "name-input"
                    name = "name"
                    value = {form.name}
                    onChange = {changeHandler}
                    placeholder = "name goes here"
                    />
                {/* Error reporting */}
                {/* {errors.name ? <p>{errors.name}</p> : null} */}
                <p>{errors.name}</p>
                </label>
            </div>

            <div className = "choices">
                {/* Size label and select for dropdown choices*/}
                <label className = "label" htmlFor = "size"> Size: 
                    <select 
                    id = "size-dropdown"
                    name = "size"
                    value = {form.size}
                    onChange = {changeHandler} 
                    >
                        <option value = "">***Choose Your Size***!</option>
                        <option value = "s">Small</option>
                        <option value = "m">Medium</option>
                        <option value = "l">Large</option>
                    </select>

                {/* Error reporting */}
                {/* {errors.size ? <p>{errors.size}</p> : null} */}
                <p>{errors.size}</p> 
                </label>

                {/* Toppings labels and checkbox choices */}
                {/* Meat Checkbox*/}
                <label htmlFor = "meat"> Meat
                    <input className = "box"
                    type = "checkbox"
                    name = "meat"
                    checked = {form.meat}
                    onChange = {changeHandler}
                    />
                </label>

                {/* Veggies Checkbox */}
                <label htmlFor = "veggies"> Veggie
                    <input className = "box"
                    type = "checkbox"
                    name = "veggies"
                    checked = {form.veggies}
                    onChange = {changeHandler}
                    />
                </label>

                {/* Poultry Checkbox */}
                <label htmlFor = "poultry"> Poultry
                    <input className = "box"
                    type = "checkbox"
                    name = "poultry"
                    checked = {form.poultry}
                    onChange = {changeHandler}
                    />
                </label>

                {/* Fruit Checkbox */}
                <label htmlFor = "fruit"> Fruit
                    <input className = "box"
                    type = "checkbox"
                    name = "fruit"
                    checked = {form.fruit}
                    onChange = {changeHandler}
                    />
                </label>

                {/* Special Instructions */}
                <label className = "label" htmlFor = "special"> Customize Your Pie:
                    <input 
                    type = "text"
                    id = "special-text"
                    name = "special"
                    value = {form.special}
                    onChange = {changeHandler}
                    placeholder = "Special Instructions"
                    />
                </label>
                <button id = "order-button" disabled = {!submitButtonState}>
                    CLICK TO SUBMIT
                </button>
            </div>
        </form>
    );
};

//Export statement
export default Form;
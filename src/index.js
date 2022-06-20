// var React = require("react")
//befor es6 everyone used to use require function to import modules 
// var ReactDOM = require("react-dom")
import React from 'react'
import ReactDOM from 'react-dom'
import '../src/index.css'
import Hello from './Components/h1'
import StudentList from './Components/StudentList'
import {OnduValue} from './Components/h1'
import {add, divide, multiply, sub } from './Components/Calculator'

const fname = "Adarsh"
const lname = "Naik"
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.toLocaleTimeString();
var img1 = "https://picsum.photos/300/300";
var img2 = "https://picsum.photos/300/300";
var img3 = "https://picsum.photos/300/300";

//h is an object where used to declare CSS
const h = {
    color : 'orange',
    textAlign: 'center',
    fontFamily: 'sans-serif'
}

console.log(OnduValue)
//to display current date readily available js function
//inside render method what to show where to show and a callback function is mentioned
ReactDOM.render(
    //to render multiple jsx elements use div tag
    // <div>
    // <h1>hello typescript</h1>
    // <p>Using two jsx elements enclosed by a div</p>
    
    // </div>,
    // [
    //     <h1>hello world!</h1>,
    //     <h2>some text</h2>,
    //     <p>lorem ipsum</p>,
    //     <p>jsx elemnts can be rendered via array of elements</p>
    //    //jsx elements h1 p can be rendered as array of objects 
    // ],
    //open and close bracket can be used or React.fragment can also be used 

    //using {} flower braces we can execute javascript related code but cannot execute 
    //conditional statement like if for while do while etc
    // ternery operator can be used inside flower braces 
    <>
        
        {/* <h1>hello world!</h1>
         <h2>some text</h2>
         <p>lorem ipsum</p>
        <p>jsx elemnts can be rendered via array of elements</p>
        <p>My name is {fname}</p>
        <p>sum of 2+3 is {2+3}</p>
        {(3<4)? "this statement is true" : false}
        <h3>My name is {fname} {lname}</h3>
        <h2>{`My full name displayed using string literals is ${fname} ${lname}`}</h2>

        <h4>{`Current Date is ${date}`}</h4>
        <h4>{`Current time as per last refresh is ${time}`}</h4> */}
      
        <h1 className='heading'>My Travelling Gallery!</h1>
      
        <h4 style={h}>{`Current Date is ${date}`}</h4>
        <div className='image-div'>
        <img className='img' src= {img1} alt = "random images" />
        <img className='img' src= {img2} alt = "random" />
        <img className='img' src={img3} alt = "random"/>
        </div>

        <h1>The below example is creating react components </h1>

       
        

   
        <Hello />

        <StudentList />
        <ul>
            <li>dummy</li>
            <li>{OnduValue}</li>
        </ul>
        <h1>My Calculator </h1>
        <p>The addtion result is  {add(10,20)}</p>
        <p>The subtraction result is {sub(20,10)}</p>
        <p>The Multiplication result is {multiply(10,20)}</p>
        <p>The division result is {divide(20,10)}</p>

        
  
    </>,
    //string concatenation example is mentioned above 
    document.getElementById("root")
);
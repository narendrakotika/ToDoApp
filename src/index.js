//React ,ReactDOM, Reactscript
import React from "react";
import ReactDoM from "react-dom/client";
import App from "./App";
//import './App.css';                                     // external css in jsx
//import  tech,{ desc, headstyle,} from "./data"           // this namedexport imported we need to use {}
                                                        // this defaultexport no need of curly braces
//import Navbar from "./Component/functionalcomp";
//import { Footer } from "./Component/classComp" 
 
//import DateTime from "./Component/functionalcomp";



//const headstyle={
 //   color:"red",                      // this is the way we use internal css
 //   fontSize:"80px" }

//React we have two types of componenets
//class based | functional based//
// functional based component


 
//const root=ReactDoM.createRoot(document.getElementById('root'))

//setInterval(()=>{

  // root.render(
     /*   <> 
      <center>
       <h1>welcome to  React js clock App⏲️</h1>
      <h2> {new Date().toLocaleTimeString()}</h2>
      </center> 
        </>
    )
},1000)*/
 /*
root.render(
  <React.StrictMode>
  <DateTime/>
  </React.StrictMode>
)*/
 


 //////////*********************** ///////////////////////////////////
 const root=ReactDoM.createRoot(document.getElementById('root'))

 root.render(
  <>
  <App/>
  </>
 ) 
 


 
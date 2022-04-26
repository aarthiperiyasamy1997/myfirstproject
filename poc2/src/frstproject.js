import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Hform } from "./frstprojectform";

export const Hotel=()=>{    
    const abc=()=>
    {
        <>
        <Hform/>
        </>
    } 
    return(
        <>
        <div className="container bg-black">
        <div className="text-center">
            <h1 className="card-title text-light"><b><i>The Famous Food Restaurant</i></b></h1>
            </div>
            <div className="row justify-content-center text-center">
            <div className="card col-6  bg-danger">
            <div className="card-body">
                <img src="./images/restaurant.jpg " width="300px" height="350px"  className="card-img" alt="hotel"/>
                <img src="./images/briyani2.jpeg" width="100px" height="300px" className="card-img" alt="food"/><br/>

               <br/><marquee><i><h3>THANK U FOR YOUR VISITING</h3></i></marquee>
               
               <br/><button className="btn btn-outline-dark float-end" onClick={abc}>Next Page</button>
            
                

            </div> 
  
            </div>
            </div>
            </div>

        
        </>
    )
}
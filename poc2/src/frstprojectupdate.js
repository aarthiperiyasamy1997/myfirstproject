import React, { useEffect, useState } from "react";
import { alter } from "./frstprojectarray";
import { updateOne } from "./join";


export const Update=(name)=>{

    const[pos]=useState(name.where)

    const[fun,setfun]=useState({
        "foodname":name.mention.foodname,
        "cstarters":name.mention.cstarters,
        "cdesert":name.mention.cdesert,
        "price":name.mention.price,
        "cid":name.mention.cid
    })

    useEffect(()=>{
        let wind=""
        fun.cstarters.map((content)=>{
            wind+=content+","
        })
        // replace resSkills from array to simple text/string
        fun.cstarters=wind
    },[])

    

    const yet=(aarthi01)=>{
        const{name,value}=aarthi01.target
        setfun(
            (back)=>{
                return{
                    ...back,
                    [name]:value
                }
            }
        )
    }

    const sweetie=async()=>{
        // alter(pos,fun)
        // alert("Updated")
        fun.cstarters=fun.cstarters.split(",")
        const t = await updateOne(fun)
        alert(t.data)
    }
    const candy=()=>{
        alert("Rejected")
    }

    return(

        <>
        <div className="container bg-warning">
        <div className="row justify-content-center">
             <div className="col-lg-8 col-md-10 col-sm-12 shadow-lg p-3">  
             <div className="form-group  p-3">
                 <label><h3><i>Main Item</i></h3></label>
                 <br/><input type="text" name="foodname" value={fun.foodname} onChange={yet} className="form-control"/>
                 <img src="pictures/briyani4.jpg" alt="something "/> 
                 
             </div>
             <div className="form-group">
                            <label>Starters</label>
                            <textarea className="form-control" 
                            name="cstarters" 
                            value={fun.cstarters} 
                            onChange={yet}>

                            </textarea>
                        </div>

             <div className="mt-2 form-group col-6 ">
                 <label><h3><i>Desert</i></h3></label><br/>
                 <select
                  name="cdesert" onChange={yet} value={fun.cdesert} className="form-select">
                     <option>select to your desert</option>
                     <option>Cupcake</option>
                     <option>Brownie</option>
                     <option>Flooda</option>
                     <option>Ice cream</option>
                 </select><br/>
                 <img src="pictures/ice cream1.jpg" alt="onnu onnu rendu"/>
             </div>

             <div className="from-group col-6">
                 <br/><label><h3><i>Prize</i></h3></label><br/>
                 <input type="number" 
                 name="price" 
                 onChange={yet} 
                 value={fun.price} 
                 placeholder="Enter the prize" 
                 className=" form-control mb-3"/>
             </div>
             <div className=" row justify-content-around">
                 <button className="btn btn-outline-dark  col-3" onClick={sweetie}><b>Order</b></button>
                 <button className="btn btn-outline-light  col-3" onClick={candy}><b>Cancel</b></button>
             </div>
             </div>
             </div>
        </div>
        </>
    )
}

       
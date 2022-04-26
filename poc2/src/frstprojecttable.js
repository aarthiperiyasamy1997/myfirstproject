import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { del, fetchExact, visibility } from "./frstprojectarray";
import { Hform } from "./frstprojectform";
import { Read } from "./frstprojectread";
import { Update } from "./frstprojectupdate";
import { erase, gather } from "./join";


export const Htable=()=>{

    const[file,setfile]=useState([])
    const[generateview,setgenerateview]=useState(false)
    const[studyview,setstudyview]=useState(false)
    const[updateView,setUpdateView]=useState(false)
    const[pos,setPos]=useState(0)
    const[obj,setObj]=useState({})

    const view=async()=>{
        const t=await gather();
        setfile(t.data)
    }

    const toErase=async(val)=>{
        const t1=await erase(val)
        alert(t1.data)
        window.location.assign("/")
    }

     useEffect(()=>{
        view()
    },[])

    return(
        <>
        <div className="container bg-dark ">
            {(generateview)?
            <>
            <Hform/>
            <button className="btn btn-success text-dark" onClick={()=>{
                setgenerateview(false)
                window.location.assign("/")
            }}> Back</button>
            </>
            :
            updateView?
            <>
            <Update mention={obj}/>
            <button className="btn btn-outline-secondary" 
            onClick={()=>{
                setUpdateView(false)
                window.location.assign("/")
             }
            }>
                 Back
                </button>
            </>
            :
            (studyview)?
            <>
            <Read where={pos}/> 
            <button className="btn btn-outline-success " onClick={()=>{
                setstudyview(false)
            }}>  Prev</button>
            </>
            :
            <>
            <button className="btn btn-success" onClick={()=>{
                setgenerateview(true)
            }}>  Apply</button>
           
            <div className="row justify-content-center">
                <table className="table table-hovered text-light">
                    <thead>
                        <tr>
                            <th>Main item</th>
                            <th>Starters</th>
                            <th>Dessert</th>
                            <th>Prize</th> 
                            <th>Action</th>   
                        </tr>
                    </thead>
                    <tbody>
                        {file.map((v,p)=>(
                            <tr>
                                <td>
                                    <button className="btn btn-outline-primary" onClick={()=>{
                                        setstudyview(true)
                                        setPos(v.cid)
                                    }}> read</button>
                                    {v.foodname}
                                </td>
                                <td>{v.cstarters}</td>
                                <td>{v.cdesert}</td>
                                <td>{v.price}</td>

                                <td>
                                    <button className="btn btn-outline-warning rounded-circle"
                                    onClick={()=>{
                                    setUpdateView(true)
                                    // setPos(p)
                                    // const y=fetchExact(v.foodname)
                                    setObj(v)
                                        }}>
                                         Edit </button>
                                </td>
                                <button className="btn-outline-danger" 
                                    onClick={ 
                                        ()=>{
                                        // setfile(del(p))

                                        toErase(v.cid)
                                        }}> 
                                    Delete  
                            </button>
                            </tr>
                            
                        ))}

                        
                    </tbody>
                </table>
            </div>
            </>
        } 
        </div>
               
        </>

    )
 }

import React from "react"
import "../index.css"
export const Navbar = () =>{
return(
    <>
        <div className="navi d-flex justify-content-between text-white  p-0">
            <div className="navititle text-bold ps-5 d-flex align-items-center"> <h4>To-Do-List</h4></div>
            <div className="navimenu d-flex  ">
                <ul className="d-flex  flex-row mb-3 ">
                    <li className="ps-1 pe-4 mt-2"><h6>Home</h6></li>
                    <li className="ps-1 pe-5 mt-2"><h6>Main Menu</h6></li>
                </ul>
            </div>
        </div>
    </>
)
}
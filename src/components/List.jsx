import React from "react";
import"../index.css"
// import image from "../assets/white todo.png"

export const List = () =>{
    return(
        <><div className="container-list">
            {/* <img src={image} alt="background image" /> */}
            <div className="container-task rounded-1  pt-3 ps-5 pb-4 ">
            <h5 className="fw-bolder pb-2
                ">To-Do-List</h5>
            <div className="container-task1 bg-white rounded-3">
                <input type="text" placeholder="Type Task Here" className="rounded-3"/>
                <button type="submit" className="btn btn-primary ps-4 ms-1 pe-4 text-bold">Add</button>
            </div>
            <div className="container-todo">
                <h5>Your To Do</h5>
                <div className="todo-lists">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="btn btn-primary ps-4 pe-4 text-bold me-2">Edit</button>
                    <button className="btn btn-danger ps-4 pe-4 text-bold me-2">Delete</button>
                </div>
            </div>
            
        </div>
        </div>
        

        </>
    )
}  
import React from "react";
import ReactDOM from "react-dom";
import "./Gmap.css";
import TodoList from "./TodoList.js";
import App from "./Gmap";


  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
    	
        <TodoList/>
        
        <App/>
        
    </div>,
    destination
);
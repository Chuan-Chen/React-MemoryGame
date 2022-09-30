import React, { useEffect, useState } from "react";
import "./Tile.css";


export default function Tile(props){

    function clickHandler(e){
        //console.log("clicked", click)
        props.onClickHandler(e, props.clicked);
        
        //console.log("Afterclicked", click)

    }
    return(
        
        <div onClick = {clickHandler} className = "tile">
            {props.name}
        </div>
    );
}
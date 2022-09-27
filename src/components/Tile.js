import React, { useState } from "react";
import "./Tile.css";


export default function Tile(props){
    const [click, setClick] = useState(0)
    return(
        <div onClick = {() => {props.onClick; setClick(!click)}} className = "tile">
            {props.name}
        </div>
    );
}
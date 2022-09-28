import React, { useEffect, useState } from "react";
import "./Tile.css";


export default function Tile(props){
    const [click, setClick] = useState(false);


    useEffect(()=>{
        if(props.hScore === 9 || props.value){
            setClick(false);
            props.resetGame;
        }
        console.log("useeffect in tile")
    }, [props.value]);

    function clickHandler(e){
        console.log("clicked")
        props.onClickHandler(e, click); 
        setClick(!click);
    }
    return(
        
        <div onClick = {clickHandler} className = "tile">
            {props.name}
        </div>
    );
}
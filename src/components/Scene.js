import React, { useEffect, useState } from "react";
import "./Scene.css";

export default function Scene(props){

    function clickHandler(){
        props.changeShow(!props.show)
    }

    return(
        <div className = {`background ${props.show ? "": "noShow"}`} onClick={clickHandler}>
                <div className = "t1">
                    Memory Game
                </div>
            <div className = "ic">
                <div className = "instructions">
                    Click on any tile you haven't <br/>clicked on previously, <br/> <b>click any tile to start</b>
                    <br/>every 9 points will get <br/> you a new board
                </div>
            </div> 
            <div className="btn" onClick={clickHandler}> Start </div>
            <div style = {{color: "white"}}>High Score: {props.hScore}</div>
        </div>
    )
}
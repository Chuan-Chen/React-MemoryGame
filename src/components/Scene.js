import React, { useEffect, useState } from "react";
import "./Scene.css";

export default function Scene(props){


    return(
        <div className = {`background ${props.show ? "": "noShow"}`}>
                <div className = "t1">
                    Memory Game
                </div>
            <div className = "ic">
                <div className = "instructions">
                    Click on any tile you haven't <br/>clicked on previously, <br/> <b>click any tile to start</b>
                    <br/>every 9 points will get <br/> you a new board
                </div>
            </div> 
            <div className="btn" onClick={()=>{props.changeShow(!props.show);}}> Start </div>
            <div style = {{color: "white"}}>High Score: {props.hScore}</div>
        </div>
    )
}
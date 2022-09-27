import React from "react";
import Tile from "./Tile";
import "./Game.css"

export default function Game(){

    return(
        <div className = "gameContainer">
            <Tile/>
            {() => {
                for(let i = 0; i < 9; i++){
                    <Tile/>
                }
            }}
        </div>
    );
}
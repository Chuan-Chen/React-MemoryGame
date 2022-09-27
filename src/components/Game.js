import React from "react";
import Tile from "./Tile";
import Tiles from "./Tiles.json"
import "./Game.css"

export default function Game(props){
    const tiles = [];
    for(let i = 0; i < 9; i++){
        tiles.push(<Tile/>);
    }
    return(
        <div className = "gameContainer">
            {tiles.map((item) => {
                return item
            })}
        </div>
    );
}
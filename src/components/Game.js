import React, { useState } from "react";
import Score from "./Score";
import Tile from "./Tile";
import tiles from "./Tiles.json"
import "./Game.css"

export default function Game(props){
    const [score, setScore] = useState(0);
    const [hScore, sethScore] = useState(0);

    function clickHandler(e){
        setScore(score + 1);
        sethScore(score + 1);

    }
    return(
        <div className = "container">
            <div className = "scoreboard">
                <Score score={score} name = "Score"/>
                <Score score={hScore} name = "High Score"/>
            </div>
            
            <div className = "gameContainer">
                {
                    tiles.tiles.map((item, i) => {
                        return <Tile onClick={clickHandler} name = {item.name} key = {i} value = {0}/>
                    })
                }
            </div>
        </div>

    );
}
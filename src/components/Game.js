import React, { useEffect, useState } from "react";
import Score from "./Score";
import Tile from "./Tile";
import tiles from "./Tiles.json"
import "./Game.css"

export default function Game(props){
    const [score, setScore] = useState(0);
    const [hScore, sethScore] = useState(0);
    const [Tiles, setTiles] = useState([{name: "🤩", clicked: false}, {name: "🤪", clicked: false}, {name: "🤭", clicked: false}, {name: "🤫", clicked: false}, {name: "🤮", clicked: false}, {name: "🤯", clicked:false}, {name: "🤬", clicked: false}, {name: "🛸", clicked: false}, {name: "₿", clicked:false} ]);
    const [animations, setAnimations] = useState(false);


    useEffect(()=>{
        console.log(score)
        if(score === 9){
            //setScore(0);
            resetGame();
        }
    },[score]);

    function shuffle(stuff){
        let array = [...stuff];
        //not my algo
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;

    }

    function changeTileState(item, click){
        let array = [...Tiles];
        console.log(array)
        let index = -1;
        for(let i = 0; i < array.length; i++){
            if(array[i].name === item){
                index = i;
                break;
            }
        }
        array[index].clicked = click;
        setTiles(array);
        
    }

    function resetGame(){
        let array = [...Tiles];
        for(let i = 0; i < array.length; i++){
            array[i].clicked = false;
        }
    }

    function clickHandler(e, hasClicked){
        
        changeTileState(e.target.textContent, !hasClicked);
        setAnimations("shuffle");
        if(score === 9){

        }else if(hasClicked){
            setScore(0);
            resetGame();
            setTiles(shuffle(Tiles));
        }else{
            
            setScore(score + 1);
            console.log("score up", score)
            setTiles(shuffle(Tiles));
            if(hScore <= score){
                sethScore(score + 1);
            }
        }
        
    }
    //<Tile resetGame={resetGame} onClickHandler={clickHandler} name={item} key={i} value={reset} hScore={hScore}
    return(
       
        <div className = "container">
            <div className = "scoreboard">
                <Score score={score} name = "Score"/>
                <Score score={hScore} name = "High Score"/>
            </div>
            <div className = "center">
                <div className = {`gameContainer ${animations ? "shuffle" : ""}`} onClick = {()=>{setAnimations(true)}} onanimationend={()=>{setAnimations(false)}}>
                    {Tiles.map((item, i) => {return <Tile resetGame={resetGame} onClickHandler={clickHandler} name={item.name} key={i} clicked={item.clicked} hScore={hScore}></Tile>})}
                </div>
            </div>
        </div>
    );
}
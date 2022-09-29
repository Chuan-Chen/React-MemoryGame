import React, { useEffect, useState } from "react";
import Score from "./Score";
import Tile from "./Tile";
import tiles from "./Tiles.json"
import "./Game.css"
let Tiles = ["🤩", "🤪", "🤭", "🤫", "🤮", "🤯", "🤬", "🛸", "₿" ];

export default function Game(props){
    const [score, setScore] = useState(0);
    const [hScore, sethScore] = useState(0);
    const [reset, setReset] = useState(false);
    const [comp, setComp] = useState([]);



    useEffect(()=>{
        console.log("useeffect setting up comp")
        setComp(createTileComponent());
    },[]);

    useEffect(()=>{
        if(score === 9){
            setScore(0);
            setReset(true);
        }
        console.log("useeffect in game");
    },[score]);
    
    function createTileComponent(){
        let array = []; 
        Tiles.map((item, i)=>{
            array.push(<Tile resetGame={resetGame} onClickHandler={clickHandler} name={item} key={i} value={reset} hScore={hScore}/>)
        })
        return array;
    }

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

    function resetGame(){
        //after game has reset it needs to change back to default state or else it reset will not work any more
        //this is called after game has reached 9 or if reset==true;
        setReset(false);
    }
    

    function clickHandler(e, hasClicked){
        if(score === 9){

        }else if(hasClicked){
            setScore(0);
            setReset(true);
            setComp(shuffle(comp));
        }else{
            setScore(score + 1);
            setComp(shuffle(comp));
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
                <div className = "gameContainer">
                
                {
                    comp.map((item) => {return item})
                }   

                </div>
            </div>
        </div>

    );
}
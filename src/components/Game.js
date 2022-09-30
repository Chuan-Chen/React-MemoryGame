import React, { useEffect, useState } from "react";
import Score from "./Score";
import Scene from "./Scene"
import Tile from "./Tile";
import tiles from "./Tiles.json"
import "./Game.css"
//let startingTiles = [{name: "😄", clicked: false}, {name: "😁", clicked: false}, {name: "😆", clicked: false}, {name: "😅", clicked: false}, {name: "🤣", clicked: false}, {name: "😂", clicked:false}, {name: "🙂", clicked: false}, {name: "🙃", clicked: false}, {name: "😉", clicked:false}];

export default function Game(props){
    const [score, setScore] = useState(0);
    const [hScore, sethScore] = useState(0);
    const [Tiles, setTiles] = useState([{name: "😄", clicked: false}, {name: "😁", clicked: false}, {name: "😆", clicked: false}, {name: "😅", clicked: false}, {name: "🤣", clicked: false}, {name: "😂", clicked:false}, {name: "🙂", clicked: false}, {name: "🙃", clicked: false}, {name: "😉", clicked:false} ]);
    const [LastTile, setLastTile] = useState(Tiles[Tiles.length-1]);
    const [animations, setAnimations] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(()=>{
        setTiles(shuffle(Tiles));
        localStorage.setItem('tiles', JSON.stringify(Tiles));
        if(localStorage.getItem('highscore')){
            setTiles(JSON.parse(localStorage.getItem('tiles')));
            sethScore(localStorage.getItem('highscore'));
        }
    },[]);

    useEffect(()=>{
        if(score%9 === 0 && score != 0){
            localStorage.setItem('tiles', JSON.stringify(Tiles));
            changeBoard();
            resetGame();
        }
    },[score]);

    useEffect(()=>{
        localStorage.setItem('highscore', hScore);
    },[hScore]);


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

    function changeBoard(){
        let array = [...Tiles];
        let lastChar = LastTile.name.codePointAt(0);
        

        for(let i = 0; i < array.length; i++){
            if(i == 0){
                array[i].name = String.fromCodePoint(lastChar+1);
            }else{
                array[i].name = String.fromCodePoint(array[i-1].name.codePointAt(0)+1);
            }
        }
        setLastTile(array[array.length-1]);
        setTiles(array);
    }

    function clickHandler(e, hasClicked){
        
        changeTileState(e.target.textContent, !hasClicked);
        setAnimations("shuffle");
        if(hasClicked){
            setScore(0);
            resetGame();
            setTiles(shuffle(Tiles));
            setShow(true);
        }else{
            setScore(score + 1);
            setTiles(shuffle(Tiles));
            if(hScore <= score){
                sethScore(score + 1);
            }
        }
        
    }
    function changeShow(value){
        setShow(value);
    }
    return(
        <div>

        <Scene hScore = {hScore} show={show} changeShow={changeShow}></Scene>
        <div className = "container">
            
            <div className = "scoreboard">
                <Score score={score} name = "Score"/>
                <Score score={hScore} name = "High Score"/>
            </div>
            <div className = "center">
                <div className = {`gameContainer ${animations ? "shuffle" : ""}`} onClick = {()=>{setAnimations(true)}} onAnimationEnd={()=>{setAnimations(false)}}>
                    {Tiles.map((item, i) => {return <Tile resetGame={resetGame} onClickHandler={clickHandler} name={item.name} key={i} clicked={item.clicked} hScore={hScore}></Tile>})}
                </div>
            </div>
        </div>
        </div>
    );
}
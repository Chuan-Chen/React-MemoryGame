import React from "react";

import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import "./App.css";

export default function App(){
    
    return (
        <div className="content">
                    <Game/>
                    <Footer/>
        </div>
        
    );
}
import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss"

const MacWindow = ({children , width="45vw" , height="60vh" , windowName, setWindowsState}) => {
  return (
    <Rnd
    
    default={{
      width: width,
      height:height,
      x:350,
      y:80
    }}
    >
      <div className="window">
        <div className="nav">
            <div className="dots">
                <div onClick={()=> setWindowsState(state =>({...state,[windowName]:false}))} className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>
            <div className="title">
                <p>{windowName}</p>
            </div>
        </div>
        <div className="main-content">
            {children}
        </div>
      </div>
    </Rnd>
  );
};

export default MacWindow;

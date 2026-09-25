import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss"

const MacWindow = ({
  children,
  width = "45vw",
  height = "60vh",
  minHeight = 320,
  minWidth = 300,
  windowName,
  closeWindow,
  focusWindow,
  zIndex = 1,
  offsetIndex = 0,
}) => {
  const offsetX = offsetIndex * 28
  const offsetY = offsetIndex * 22

  return (
    <Rnd
      default={{
        width,
        height,
        x: 350 + offsetX,
        y: 80 + offsetY,
      }}
      minWidth={minWidth}
      minHeight={minHeight}
      style={{ zIndex }}
      onMouseDown={() => focusWindow(windowName)}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div onClick={() => closeWindow(windowName)} className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>{windowName}</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  )
}

export default MacWindow;

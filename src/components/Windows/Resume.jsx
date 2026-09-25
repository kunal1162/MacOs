import React from 'react'
import "./resume.scss"
import MacWindow from './MacWindow'
const Resume = ({ windowName, setWindowsState, closeWindow, focusWindow, zIndex, offsetIndex }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      closeWindow={closeWindow}
      focusWindow={focusWindow}
      zIndex={zIndex}
      offsetIndex={offsetIndex}
    >
        <div className="resume-window">
            <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume

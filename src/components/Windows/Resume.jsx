import React from 'react'
import "./resume.scss"
import MacWindow from './MacWindow'
const Resume = () => {
  return (
    <MacWindow>
        <div className="resume-window">
            <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume

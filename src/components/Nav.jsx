import React from 'react'
import './nav.scss'
import DateAndTime from './DateAndTime'
const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="./public/Nav-icons/apple.svg" alt="" />
            </div>
            <div className="nav-item">
                <p>Kunal</p>
            </div>
            <div className="nav-item">
                <p>File</p>
            </div>
            <div className="nav-item">
                <p>Window</p>
            </div>
            <div className="nav-item">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-icon">
                <img src="./public/Nav-icons/wifi.svg" alt="" />
            </div>
            <div className="nav-item">
                <DateAndTime/>
            </div>
        </div>
    </nav>
  )
}

export default Nav

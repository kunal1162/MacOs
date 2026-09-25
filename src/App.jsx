import React, { useState } from 'react'
import './App.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/Windows/MacWindow'
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume from './components/Windows/Resume'
import Spotify from './components/Windows/Spotify'
import Cli from './components/Windows/Cli'

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note : false,
    resume : false,
    spotify : false,
    cli : false
  })
  return (
      <main>
        <Dock windowsState={windowsState} setWindowsState={setWindowsState}/>
        <Nav/>
        {windowsState.github && <Github windowName="github"  setWindowsState={setWindowsState}/>}
        {windowsState.note && <Note windowName="note"  setWindowsState={setWindowsState}/>}
        {windowsState.resume && <Resume windowName="resume"  setWindowsState={setWindowsState}/>}
        {windowsState.spotify && <Spotify windowName="spotify"  setWindowsState={setWindowsState}/>}
        {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState}/>}
      </main>
  )
}

export default App

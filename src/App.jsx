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
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  })
  const [windowOrder, setWindowOrder] = useState([])

  const openWindow = (windowName) => {
    setWindowsState((state) => ({ ...state, [windowName]: true }))
    setWindowOrder((prev) => {
      if (prev.includes(windowName)) {
        return [...prev.filter((item) => item !== windowName), windowName]
      }

      return [...prev, windowName]
    })
  }

  const closeWindow = (windowName) => {
    setWindowsState((state) => ({ ...state, [windowName]: false }))
    setWindowOrder((prev) => prev.filter((item) => item !== windowName))
  }

  const focusWindow = (windowName) => {
    setWindowOrder((prev) => {
      if (!prev.includes(windowName)) {
        return [...prev, windowName]
      }

      return [...prev.filter((item) => item !== windowName), windowName]
    })
  }

  return (
    <main>
      <Dock windowsState={windowsState} openWindow={openWindow} />
      <Nav />
      {windowsState.github && (
        <Github
          windowName="github"
          setWindowsState={setWindowsState}
          closeWindow={closeWindow}
          focusWindow={focusWindow}
          zIndex={windowOrder.indexOf('github') + 1}
          offsetIndex={windowOrder.indexOf('github')}
        />
      )}
      {windowsState.note && (
        <Note
          windowName="note"
          setWindowsState={setWindowsState}
          closeWindow={closeWindow}
          focusWindow={focusWindow}
          zIndex={windowOrder.indexOf('note') + 1}
          offsetIndex={windowOrder.indexOf('note')}
        />
      )}
      {windowsState.resume && (
        <Resume
          windowName="resume"
          setWindowsState={setWindowsState}
          closeWindow={closeWindow}
          focusWindow={focusWindow}
          zIndex={windowOrder.indexOf('resume') + 1}
          offsetIndex={windowOrder.indexOf('resume')}
        />
      )}
      {windowsState.spotify && (
        <Spotify
          windowName="spotify"
          setWindowsState={setWindowsState}
          closeWindow={closeWindow}
          focusWindow={focusWindow}
          zIndex={windowOrder.indexOf('spotify') + 1}
          offsetIndex={windowOrder.indexOf('spotify')}
        />
      )}
      {windowsState.cli && (
        <Cli
          windowName="cli"
          setWindowsState={setWindowsState}
          closeWindow={closeWindow}
          focusWindow={focusWindow}
          zIndex={windowOrder.indexOf('cli') + 1}
          offsetIndex={windowOrder.indexOf('cli')}
        />
      )}
    </main>
  )
}

export default App

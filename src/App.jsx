import React from 'react'
import './App.scss'
import Doc from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/Windows/MacWindow'
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume from './components/Windows/Resume'
import Spotify from './components/Windows/Spotify'
import Cli from './components/Windows/Cli'

const App = () => {
  return (
      <main>
        <Doc/>
        <Nav/>
        <Github/>
        <Note/>
        <Resume/>
        <Spotify/>
        <Cli/>
      </main>
  )
}

export default App

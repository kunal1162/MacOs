import React from 'react'
import './App.scss'
import Doc from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/Windows/MacWindow'
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume from './components/Windows/Resume'
import Spotify from './components/Windows/Spotify'

const App = () => {
  return (
      <main>
        <Doc/>
        <Nav/>
        <Github/>
        <Note/>
        <Resume/>
        <Spotify/>
      </main>
  )
}

export default App

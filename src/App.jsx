import React from 'react'
import './App.scss'
import Doc from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/Windows/MacWindow'

const App = () => {
  return (
      <main>
        <Doc/>
        <Nav/>
        <MacWindow>
          <h1>Hii</h1>
        </MacWindow>
      </main>
  )
}

export default App

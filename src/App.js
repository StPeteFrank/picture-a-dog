import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Dog Breed Finder 🐾</h1>
        </header>
        <main>
          <div>
            <input type="text" placeholder="Enter Dog Breed" />
          </div>
          <div>
            <p>Dog Images Here</p>
          </div>
        </main>
      </div>
    )
  }
}

export default App

//What do you want this app to do:
//Enter a dog name in an input bar
//Hit enter and dog image pops up

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
          <form>
            <input type="text" placeholder="Enter Dog Breed" />
          </form>
          <ul>
            <button class="germanshepherd">German Shepherd</button>
            <button class="doberman">Doberman</button>
            <button class="irish wolfhound">Irish Wolfhound</button>
            <button class="rottweiler">Rottweiler</button>
            <button class="rhodesian ridgeback">Rhodesian Ridgeback</button>
            <button class="golden retriever">Golden Retriever</button>
            <button class="scottish deerhound">Scottish Deerhound</button>
            <button class="french bulldog">French Bulldog</button>
            <button class="akita">Akita</button>
            <button class="great dane">Great Dane</button>
          </ul>

          <div>
            <p>⬇️ Dog Images Go Here ⬇️</p>
          </div>
        </main>
      </div>
    )
  }
}

export default App

//What do you want this app to do:
//Make a list of 10 hardcoded dogs show image

//Enter a dog name in an input bar
//Hit enter and dog image pops up

//Study API
//Practice API in Postman
//

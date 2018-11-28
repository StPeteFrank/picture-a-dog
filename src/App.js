import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: '',
      breeds: []
    }
  }

  componentDidMount = () => {
    axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
      console.log(response.data)
      this.setState({
        breeds: Object.keys(response.data.message)
      })
    })
  }

  clickBreed = event => {
    let dogBreed = event.target.className

    console.log(dogBreed)

    // use the api to fetch an image for this breed
    // and update the state for `image`
  }

  render() {
    console.log(this.state.breeds)
    return (
      <div className="App">
        <header>
          <h1>Dog Breed Finder 🐾</h1>
        </header>
        <main>
          <form>
            <input type="text" placeholder="Enter Dog Breed" />
          </form>
          <img src={this.state.image} />
          <ul>
            {this.state.breeds.map(breed => {
              return (
                <button onClick={this.clickBreed} class={breed}>
                  {breed}
                </button>
              )
            })}
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

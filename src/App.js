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
    let dogBreed = event.target.value

    axios.get(`https://dog.ceo/api/breed/${dogBreed}/images`).then(response => {
      this.setState({
        image: response.data.message[0]
      })
    })

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
          {/* <form>
            <input type="text" placeholder="Enter Dog Breed" />
          </form> */}
          <select onChange={this.clickBreed}>
            <option value="">Select a Dog</option>
            {this.state.breeds.map((breed, index) => {
              return (
                <option key={index} value={breed}>
                  {breed}
                </option>
              )
            })}
          </select>

          <div className="breedImage">
            <img src={this.state.image} />
          </div>
        </main>
      </div>
    )
  }
}

export default App

//Questions?

//How to image random
//Is there enough to break into components
//How can i add a scroll button on the imagea

//This app will display images of different dog breeds.
//The data will pull from dog.ceo/api
//option to click from 12 random breed buttons and display image
//option for drop down bar to select from A list

//A list of random breeds as buttons
//Buttons clicked show breed image
//How to reduce the initial breeds button list to 12 options
//How to make the image display after click

// menu with a drop down menu with a list of dogs
//Hit go button and the breed image pops up and displays

//Study API
//Practice API in Postman

//ADD a slideshow option
//Work with react-router to use the browser to display images

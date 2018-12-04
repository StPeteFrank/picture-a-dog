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

    axios
      .get(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
      .then(response => {
        console.log(response.data)

        this.setState({
          image: response.data.message
        })
      })

    // use the api to fetch an image for this breed
    // and update the state for `image`
  }

  fetchOneRandomDog = () => {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then(response => {
      this.setState({
        image: response.data.message
      })
    })
  }

  dogShow = () => {
    setInterval(this.fetchOneRandomDog, 1000)
  }

  render() {
    console.log(this.state.breeds)
    return (
      <div className="App">
        <header>
          <h1>Dog Breed Finder 🐾</h1>
        </header>
        <main>
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

          <button onClick={this.dogShow}>Dog Show!</button>
        </main>
      </div>
    )
  }
}

export default App

//Questions?

//How to image random X
//Can I set up a separate component for my onChange that sends user to the next screen for images
//How can i add a scroll button on the images slideshow for clicked breed random pics
//How can I add a "dogshow" slideshow that automatically scrolls through ALL randomly on a third component screen

//This app will display images of different dog breeds.
//The data will pull from dog.ceo/api
// menu with a drop down menu with a list of dogs
//Buttons clicked show breed image
//How to make the image display after click
//Hit go button and the breed image pops up and displays

//Study API
//Practice API in Postman

//ADD a slideshow option
//Work with react-router to use the browser to display images

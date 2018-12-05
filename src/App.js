import React, { Component } from 'react'
import DisplayImage from './DisplayImage'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import './App.css'
import BreedChoser from './BreedChoser'
import DogShow from './DogShow'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: '',
      breeds: []
    }
  }

  fetchOneRandomDog = () => {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then(response => {
      this.setState({
        image: response.data.message
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Dog Breed Finder 🐾</h1>
        </header>
        <main>
          <Router>
            <>
              <Route exact path="/" component={BreedChoser} />
              <Route exact path="/dogshow" component={DogShow} />
              <Route exact path="/:breed" component={DisplayImage} />
            </>
          </Router>

          <div className="breedImage">
            <img src={this.state.image} />
          </div>
        </main>
      </div>
    )
  }
}

export default App

//How do I?

//Which declared functions do i need to move into the desired components file.
//Place Dog Show button on under displayed image section on
// --the DisplayImage page.
//Dog Show renders on DogShow page.

//DONE How to image random
//DONE This app will display images of different dog breeds.
//DONE The data will pull from dog.ceo/api
//DONE Menu with a drop down menu with a list of dogs
//DONE Buttons clicked show breed image
//DONE How to make the image display after click
//DONE Dogshow button with slideshow.

//Study API
//Practice API in Postman

//DONE ADD a slideshow option
//Work with react-router to use the browser to display images

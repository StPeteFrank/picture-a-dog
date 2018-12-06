import React, { Component } from 'react'
import axios from 'axios'

class DogShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: ''
    }
  }
  componentDidMount = () => {
    setInterval(this.fetchOneRandomDog, 1000)
  }
  fetchOneRandomDog = () => {
    axios.get('https://dog.ceo/api/breeds/image/random').then(response => {
      this.setState({
        image: response.data.message
      })
    })
  }
  renderDogImage = () => {
    if (this.state.image === '') {
      return
    }
    return <img src={this.state.image} alt="dog show" />
  }
  render() {
    return <div className="breedSlideShow">{this.renderDogImage()}</div>
  }
}

export default DogShow

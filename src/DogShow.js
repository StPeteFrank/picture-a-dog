import React, { Component } from 'react'
import axios from 'axios'

class DogShow extends Component {
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
    return <div />
  }
}

export default DogShow

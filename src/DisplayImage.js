import React, { Component } from 'react'
import axios from 'axios'

class DisplayImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: ''
    }
  }
  componentDidMount = () => {
    const dogBreed = this.props.match.params.breed

    axios
      .get(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
      .then(response => {
        this.setState({
          image: response.data.message
        })
      })
  }
  dogShow = () => {
    window.location = '/dogshow'
  }
  render() {
    return (
      <div>
        <button onClick={this.dogShow}>Dog Show!</button>
        <div className="breedImage">
          <img src={this.state.image} />
        </div>
      </div>
    )
  }
}

export default DisplayImage

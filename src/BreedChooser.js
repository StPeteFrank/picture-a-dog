import React, { Component } from 'react'
import axios from 'axios'

class BreedChooser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      breeds: []
    }
  }

  componentDidMount = () => {
    axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
      this.setState({
        breeds: Object.keys(response.data.message)
      })
    })
  }

  clickBreed = event => {
    let dogBreed = event.target.value

    window.location = `/${dogBreed}`
  }

  render() {
    return (
      <select onChange={this.clickBreed}>
        <option value="">Select a Breed</option>
        {this.state.breeds.map((breed, index) => {
          return (
            <option key={index} value={breed}>
              {breed}
            </option>
          )
        })}
      </select>
    )
  }
}

export default BreedChooser

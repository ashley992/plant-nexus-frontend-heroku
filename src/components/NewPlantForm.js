import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createPlant } from '../actions/myPlants'


class NewPlantForm extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      scientificName: '',
      imageUrl: ''
    }
  }

   handleChange = event => {
     const { name, value } = event.target
     this.setState({
       [name]: value
     })
  }

   handleSubmit = event => {
    event.preventDefault()
    this.props.createPlant(this.state)
    this.props.history.push('/my-plants')
    this.setState({
      name: '',
      scientificName: '',
      imageUrl: ''
    })
   }

  render(){
    return (
      <>
        <h3>Add a new plant to your collection:</h3>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="name" name="name" type="text" onChange={this.handleChange} />
          <br/>
          <input type='text' name="scientificName" placeholder="Scientific Name (optional)" onChange={this.handleChange}/>
          <br />
          <input type='text' name="imageUrl" placeholder="Image Url" onChange={this.handleChange}/>
          <br />
          <input type="submit" value="Create Plant" />
        </form>
      </>
  )}
}


export default connect(null, { createPlant })(NewPlantForm)

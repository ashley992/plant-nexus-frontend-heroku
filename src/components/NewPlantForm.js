import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createPlant } from '../actions/myPlants'


class NewPlantForm extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      scientific_name: '',
      image_url: '',
      currentUser: {}
    }
  }

  componentDidMount = () => {
    this.setState({
      currentUser: this.props.currentUser
    })
  }

   handleChange = event => {
  console.log(this.state)
     const { name, value } = event.target
     this.setState({
       [name]: value
     })
  }

   handleSubmit = event => {
    event.preventDefault()
    createPlant(this.state, this.props.history)
    this.setState({
      name: '',
      scientific_name: '',
      image_url: ''
    })
   }

  render(){
    return (
      <>
        <h3>Add a new plant to your collection:</h3>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="name" name="name" type="text" onChange={this.handleChange} />
          <br/>
          <input type='text' name="scientific_name" placeholder="Scientific Name (optional)" onChange={this.handleChange}/>
          <br />
          <input type='text' name="image_url" placeholder="Image Url" onChange={this.handleChange}/>
          <br />
          <input type="submit" value="Create Plant" />
        </form>
      </>
  )}
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { createPlant })(NewPlantForm)

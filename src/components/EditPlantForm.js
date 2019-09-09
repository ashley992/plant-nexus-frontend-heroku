import React, { Component } from 'react';
import { connect } from 'react-redux'
import PlantForm from './PlantForm'
import { updatePlant, deletePlant } from '../actions/myPlants'
import { setEditFormData, resetPlantForm } from '../actions/plantForm'

class EditPlantForm extends Component {
//props.match.params.id = plant id number

  componentDidMount = () => {
    this.props.plant && this.props.setEditFormData(this.props.plant)
  }

  componentDidUpdate = (prevProps) => {
    this.props.plant && !prevProps.plant && this.props.setEditFormData(this.props.plant)
  }

  componentWillUnmount = () => {
    this.props.resetPlantForm()
  }

  handleSubmit = (formData) => {
    const { updatePlant, plant, history } = this.props
    updatePlant({
      ...formData,
      plantId: plant.plantId
    }, history)
  }

  render(){
    const { history, deletePlant, plant } = this.props
    const plantId = plant ? plant.id : null
    return (
      <>
        <PlantForm editMode handleSubmit={this.handleSubmit} />
        <br/>
        <button onClick={()=>deletePlant(plantId, history)}>Plant died :( Remove from garden</button>
      </>
    )}
}


export default connect(null, { updatePlant, setEditFormData, resetPlantForm, deletePlant })(EditPlantForm)
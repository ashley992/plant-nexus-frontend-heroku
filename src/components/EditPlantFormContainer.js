import React, {Component} from 'react';
import PlantForm from './PlantForm'
import { updatePlant, deletePlant } from '../actions/myPlants'
import { setEditFormData, resetPlantForm } from '../actions/plantForm'
import { connect } from 'react-redux'

class EditPlantFormContainer extends Component {

  componentDidMount(){
    this.props.plant && this.props.setEditFormData(this.props.plant)
  }

  componentDidUpdate(prevProps){
    this.props.plant && !prevProps.plant && this.props.setEditFormData(this.props.plant)
  }

  componentWillUnmount(){
    this.props.resetPlantForm()
  }

  handleClick = () => {
    this.props.deletePlant(this.props.match.params.id)
  }

  handleSubmit = (formData) => {
    const { updatePlant, plant, history } = this.props
    updatePlant({
      ...formData,
      plantId: plant.id
    }, history)
  }
  
  render(){
    return (
      <>
        <h2>Edit this plant</h2>
        <PlantForm editMode handleSubmit={this.handleSubmit} />
        <button className="delete" onClick={this.handleClick}>Plant died, remove from garden</button>
      </>
    )
  }
};

export default connect(null, {updatePlant, setEditFormData, resetPlantForm, deletePlant })(EditPlantFormContainer);
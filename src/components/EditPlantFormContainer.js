import React, {Component} from 'react';
import PlantForm from './PlantForm'
import { updatePlant } from '../actions/myPlants'
import { setEditFormData } from '../actions/plantForm'
import { connect } from 'react-redux'

class EditPlantFormContainer extends Component {

  componentDidMount(){
    this.props.plant && this.props.setEditFormData(this.props.plant)
  }

  handleSubmit = (formData, userId) => {
    console.log('handlesubmit props', this.props)
    const { updatePlant, plant, history } = this.props
    updatePlant({
      ...formData,
      plantId: plant.id,
      userId
    }, history)
  }
  
  render(){
    const { handleSubmit } = this.props
    return <PlantForm editMode handleSubmit={this.handleSubmit} />
  }
};

export default connect(null, {updatePlant, setEditFormData })(EditPlantFormContainer);
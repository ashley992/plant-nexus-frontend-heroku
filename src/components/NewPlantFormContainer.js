import React from 'react';
import PlantForm from './PlantForm'
import { createPlant } from '../actions/myPlants'
import { connect } from 'react-redux'

const NewPlantFormContainer = ({ history, createPlant }) => {

  const handleSubmit = (event, formData, userId) => {
    event.preventDefault()
    createPlant({
      ...formData,
      userId
    }, history)
  }

  return <PlantForm history={history} handleSubmit={handleSubmit} />

};

export default connect(null, {createPlant})(NewPlantFormContainer);
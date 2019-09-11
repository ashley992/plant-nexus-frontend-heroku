import React from 'react';
import PlantForm from './PlantForm'
import { createPlant } from '../actions/myPlants'
import { connect } from 'react-redux'

const NewPlantFormContainer = ({ createPlant }) => {

  const handleSubmit = (formData) => {
    createPlant(formData)
  }

  return(
    <>
      <h2>Add a new happy plant to your garden!</h2>
      <PlantForm handleSubmit={handleSubmit} />
    </>
  )
};

export default connect(null, {createPlant})(NewPlantFormContainer);
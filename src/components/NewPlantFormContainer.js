import React from 'react';
import PlantForm from './PlantForm'
import { createPlant } from '../actions/myPlants'
import { connect } from 'react-redux'

const NewPlantFormContainer = ({ createPlant, history }) => {

  const handleSubmit = (formData, history) => {
    createPlant(formData, history)
  }

  return(
    <>
      <h2>Add a new happy plant to your garden!</h2>
      <PlantForm history={history} handleSubmit={handleSubmit} />
    </>
  )
};

export default connect(null, {createPlant})(NewPlantFormContainer);
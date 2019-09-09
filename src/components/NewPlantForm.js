import React from 'react';
import PlantForm from './PlantForm'
import { creatPlant } from '../actions/myPlant'
import { connect } from 'react-redux'

const NewPlantForm = ({ history, creatPlant }) => {

  const handleSubmit = (formData, userId) => {
    creatPlant({
      ...formData,
      userId
    }, history)
  }
  return  <PlantForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { creatPlant })(NewPlantForm);
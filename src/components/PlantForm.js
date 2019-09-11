import React from 'react';
import { updatePlantForm } from '../actions/plantForm'
import { connect } from 'react-redux'

const PlantForm = ({ formData, updatePlantForm, handleSubmit, editMode, plant }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const newFormData = {
      ...formData,
      [name]: value
    }
    updatePlantForm(newFormData)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
      <input
        placeholder="name" name="name" onChange={handleChange} value={formData.name}
      />
        <br/>
      <input
        placeholder="Scientific Name" name="scientificName"
        onChange={handleChange} value={formData.scientificName}
      />
      <br/>
      <input
        placeholder="Image Url" name="imageUrl" onChange={handleChange} value={formData.imageUrl}
      />
      <br/>
      <input
        type="submit" value={editMode ? "Update Plant" : "Create Plant" }
      />
    </form>
  );
}

const mapStateToProps = state => {
  // const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.plantForm,
  }
}

export default connect(mapStateToProps, { updatePlantForm })(PlantForm);

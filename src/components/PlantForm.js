import React from 'react';
import { updatePlantForm } from '../actions/plantForm'
import { connect } from 'react-redux'

const PlantForm = ({ formData, updatePlantForm, userId, trip, handleSubmit, editMode }) => {

  const { name, scientificName, imageUrl } = formData


  const handleChange = event => {
    const { name, value } = event.target
    updatePlantForm(name, value)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
      <input
        placeholder="name" name="name" onChange={handleChange} value={name}
      />
        <br/>
      <input
        placeholder="Scientific Name" name="scientificName"
        onChange={handleChange} value={scientificName}
      />
      <br/>
      <input
        placeholder="Image Url" name="imageUrl" onChange={handleChange} value={imageUrl}
      />
      <br/>
      <input
        type="submit" value={editMode ? "Update Plant" : "Create Trip" }
      />
    </form>
  );
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.plantForm,
    userId
  }
}

export default connect(mapStateToProps, { updatePlantForm })(PlantForm);

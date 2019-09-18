import React from 'react';
import { updatePlantForm } from '../actions/plantForm'
import { connect } from 'react-redux'

const PlantForm = ({ formData, history, updatePlantForm, handleSubmit, editMode }) => {

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
      handleSubmit(formData, history)
    }}>
      <input placeholder="name" name="name" onChange={handleChange} value={formData.name} />
        <br/>
      <input placeholder="Scientific Name" name="scientificName"
        onChange={handleChange} value={formData.scientificName} />
      <br/>
      <input placeholder="Image Url" name="imageUrl" onChange={handleChange} value={formData.imageUrl}/>
      <br/>
      <textarea rows='5' columns='40' placeholder="Notes" name="notes" onChange={handleChange} value={formData.notes}/>
      <br />
      <input type="submit" value={editMode ? "Update Plant" : "Create Plant" }/>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    formData: state.plantForm,
  }
}

export default connect(mapStateToProps, { updatePlantForm })(PlantForm);
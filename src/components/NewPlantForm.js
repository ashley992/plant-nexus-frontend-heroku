import React from 'react'
import { connect } from 'react-redux'
import { updateNewPlantForm } from '../actions/newPlantForm'

const NewPlantForm = ({ name, scientificName, imageUrl, history }) => {

  const handleChange = event => {
    const { name, value } = event.target
    updateNewPlantForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }
console.log(name)
  return (
    <div className='new-plant-form'>
      <h3>Add a new plant to your collection:</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Plant Name" value={name} onChange={handleChange}/>
        <br />
        <input name="scientificName" placeholder="Scientific Name (optional)"  onChange={handleChange}/>
        <br />
        <input name="imageUrl" placeholder="Image Url"  onChange={handleChange}/>
        <br />
        <input type="submit" value="Create Plant" />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  const { name, scientificName, imageUrl } = state.newPlantForm
  return {
    name, scientificName, imageUrl
  }
}

export default connect(mapStateToProps, { updateNewPlantForm })(NewPlantForm)
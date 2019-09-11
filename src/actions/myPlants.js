import { resetPlantForm } from "./plantForm"

//synchronous actions
export const setPlants = plants => {
  return {
    type: 'SET_MY_PLANTS',
    plants
  }
}

export const clearMyPlants = () => {
  return{
    type: 'CLEAR_MY_PLANTS'
  }
}

export const addPlant = plant => {
  return {
    type: 'ADD_CREATED_PLANT',
    plant
  }
}

export const updatePlantSuccess = plant => {
  return {
    type: "UPDATE_PLANT",
    plant
  }
}

export const deletePlantSuccess = plantId => {
  return {
    type: "DELETE_PLANT",
    plantId
  }
}

//asynch actions
export const getPlants = ({ user_id }) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/users/${user_id}/plants`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then(resp =>{
      if (resp.error){
        alert(resp.error)
      } else {
        resp.data.forEach( plant => dispatch(setPlants(plant.attributes)))
      }
    })
  }
}

export const createPlant = (formData, history) => {
  return dispatch => {
    const plantInfo = {
      plant: {
        name: formData.name,
        scientific_name: formData.scientificName,
        image_url: formData.imageUrl
      }
    }
    return fetch("http://localhost:3001/api/v1/plants", {
      credentials: 'include',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plantInfo)
    })
    .then(r => r.json())
    .then(plant =>{
      if (plant.error){
        alert(plant.error)
      }else {
        dispatch(addPlant(plant.data))
        dispatch(resetPlantForm())
        history.push(`/plants/${plant.data.id}`)
      }
    })
  }
}

export const updatePlant = (formData, history) => {
  return dispatch => {
    const plantData = {
      name: formData.name,
      scientific_name: formData.scientificName,
      image_url: formData.imageUrl,
    }
    return fetch(`http://localhost:3001/api/v1/plants/${formData.plantId}`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(plantData)
    })
    .then(r => r.json())
    .then(plant => {
      if(plant.error) {
        alert(plant.error)
      } else{
        dispatch(updatePlantSuccess(plant.data))
        history.push(`/plants/${plant.data.id}`)
      }
    })
  }
}

export const deletePlant = (plantId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/plants/${plantId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
    .then(r => r.json())
    .then(plant => {
      if(plant.error){
        alert(plant.error)
      } else {
        dispatch(deletePlantSuccess(plantId))
        alert(plant.data)
        history.push(`/plants`)
      }
    })
  }
}
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

export const createPlant = (formData) => {
  return dispatch => {
    const plantInfo = {
      plant: formData
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
        alert("There's a new plant in your garden!")
      }
    })
  }
}
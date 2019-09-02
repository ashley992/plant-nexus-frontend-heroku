//synchronous actions
export const setPlants = plant => {
  return {
    type: 'SET_MY_PLANTS',
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
const initialState = {
  name: "",
  scientificName: "",
  imageUrl: ""
}

export default (state = initialState, action) => {
  switch (action.type) {

    case "UPDATE_NEW_PLANT_FORM":
      return {...state, 
        [action.payload.name]: action.payload.value
      }

    case "RESET_NEW_PLANT_FORM":
      return initialState

    default:
      return state
  }
}
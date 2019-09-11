const initialState = {
  name: '',
  scientificName: '',
  imageUrl: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_PLANT_FORM":
      return action.formData
    case "RESET_NEW_PLANT_FORM":
      return initialState
    case 'SET_EDIT_FORM_DATA':
      return action.plantFormData
    default:
      return state
  }
}
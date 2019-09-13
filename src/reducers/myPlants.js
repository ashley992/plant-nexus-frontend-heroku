export default (state = [], action) => {
  switch (action.type) {
    
    case 'SET_MY_PLANTS':
      return [...state, action.plants]
      
      case 'CLEAR_MY_PLANTS':
        return []

      case 'ADD_CREATED_PLANT':
        return state = [...state, action.plant]

      case 'UPDATE_PLANT':
        return state.map(plant => plant.id === action.plant.id ? action.plant : plant)
      
      case 'DELETE_PLANT':
        return state.filter(plant => plant.id === action.plantId ? false : true)

    default:
      return state
  }
}
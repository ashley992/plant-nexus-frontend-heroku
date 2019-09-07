export default (state = [], action) => {
  switch (action.type) {
    
    case 'SET_MY_PLANTS':
      return [...state, action.plants]
      
      case 'CLEAR_MY_PLANTS':
        return []
        
      case 'ADD_CREATED_PLANT':
        console.log("in reducer", action)
        return state = [...state, action.plant]

    default:
      return state
  }
}
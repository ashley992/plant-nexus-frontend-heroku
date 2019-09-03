export default (state = [], action) => {
  switch (action.type) {

    case 'SET_MY_PLANTS':
      return state = [...state, action.plant]

    case 'CLEAR_MY_PLANTS':
      return []

    default:
      return state
  }
}
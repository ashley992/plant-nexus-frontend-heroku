export default (state = [], action) => {
  switch (action.type) {

    case 'SET_MY_PLANTS':
      return state = [...state, action.plant]

    default:
      return state
  }
}
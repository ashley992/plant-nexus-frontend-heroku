export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    case "UPDATE_CURRENT_USER":
      const attr = {name: action.user.name, username: action.user.username}
      return state = {...state,
        attributes: attr
      }
    case "CLEAR_CURRENT_USER":
      return null
    default:
      return state
  }
}
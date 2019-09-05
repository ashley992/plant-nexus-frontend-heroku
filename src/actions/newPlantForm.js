export const updateNewPlantForm = (name, value) => {
  return {
    type: "UPDATE_NEW_PLANT_FORM",
    payload: {name, value}
  }
}

export const updatePlantForm = formData => {
  return {
    type: "UPDATE_NEW_PLANT_FORM",
    formData
  }
}

export const resetPlantForm = () => {
  return {
    type: "RESET_NEW_PLANT_FORM",
  }
}

export const setEditFormData = plant => {
  console.log("in set edit form", plant)
  const plantFormData = {
    name: plant.name,
    scientificName: plant.scientific_name,
    imageUrl: plant.image_url
  }
  return {
    type: "SET_EDIT_FORM_DATA",
    plantFormData
  }
}

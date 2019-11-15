import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { getPlants } from './myPlants.js'
import { clearMyPlants } from './myPlants'

//synch action creators
export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    user: user
  }
}

export const updateCurrentUser = user => {
  return{
    type: 'UPDATE_CURRENT_USER',
    user: user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}


//asynch action creators
export const login = (credentials, history) => {
  return dispatch => {
    return fetch("https://plant-nexus.herokuapp.com/login", {
      credentials: 'include',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(r => r.json())
    .then(user =>{
      if (user.error){
        alert(user.error)
      }else {
        dispatch(setCurrentUser(user.data))
        dispatch(resetLoginForm())
        dispatch(getPlants({user_id: user.data.id}))
        history.push('/plants')
      }
    })
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearMyPlants())
    return fetch('https://plant-nexus.herokuapp.com//logout', {
      credentials: 'include',
      method: 'DELETE'
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("https://plant-nexus.herokuapp.com/get_current_user", {
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
        dispatch(setCurrentUser(resp.data))
        dispatch(getPlants({user_id: resp.data.id}))
      }
    })
  }
}

export const signup = (credentials, history) => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("https://plant-nexus.herokuapp.com/signup", {
      credentials: 'include',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(user =>{
      if (user.error){
        alert(user.error)
      }else {
        dispatch(setCurrentUser(user.data))
        dispatch(resetSignupForm())
        dispatch(getPlants({user_id: user.data.id}))
        history.push('/')
      }
    })
  }
}

export const updateUser = (userData, history) => {
  return dispatch => {
    return fetch(`https://plant-nexus.herokuapp.com/users/${userData.id}`, {
        credentials: 'include',
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
      .then(r => r.json())
      .then(user =>{
        if (user.error){
          alert(user.error)
        }else {
          dispatch(updateCurrentUser(user))
          history.push('/plants')
        }
      })
  }
}
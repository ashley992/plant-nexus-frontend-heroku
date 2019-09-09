import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import myPlants from './reducers/myPlants';
import plantForm from './reducers/plantForm';


const reducer = combineReducers({
  currentUser,
  loginForm,
  signupForm,
  myPlants,
  plantForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store= createStore(reducer, composeEnhancer(applyMiddleware(thunk)) )

export default store;
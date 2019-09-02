import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/usersReducer'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import plants from './reducers/plants';

const reducer = combineReducers({
  users: usersReducer,
  currentUser,
  loginForm,
  plants
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store= createStore(reducer, composeEnhancer(applyMiddleware(thunk)) )

export default store;
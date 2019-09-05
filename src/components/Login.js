import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {


  const handleChange = event => {
    const {name, value} = event.target
    const formData = {
      ...loginFormData,
      [name]: value }
    updateLoginForm(formData) //updates state as user is putting input into text boxes
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
  }

  return (
    <>
      <h3>Log In:</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' 
          name='username' placeholder="username" 
          value={loginFormData.username} 
          onChange={handleChange}/>
        <br/>
        <input type='password' name='password' 
          placeholder='password' 
          value={loginFormData.password} 
          onChange={handleChange}/>
        <br/>
        <input type='submit' value='Log In' />
      </form>
    </>
  )
}

//gives access of state from store as props
//gives an argument coming into component that looks like {username: 'Plantinator', password: '123'}
const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
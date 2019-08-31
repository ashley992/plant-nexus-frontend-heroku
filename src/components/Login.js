import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ({ loginForm, updateLoginForm }) => {


  const handleChange = event => {
    const {name, value} = event.target
    const formData = {
      ...loginForm,
      [name]: value }
    updateLoginForm(formData)
  }

  return (
    <form>
      <input type='text' name='username' placeholder="username" value={loginForm.username} onChange={handleChange}/>
      <br />
      <input type='text' name='password' placeholder='password' value={loginForm.password} onChange={handleChange}/>
      <br />
      <input type='submit' value='Log In' />
    </form>
  )
}

//gives access of state from store as props
//gives an argument coming into component that looks like {username: 'Plantinator', password: '123'}
const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm })(Login)
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../actions/currentUser'

class EditUserForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      username: '',
      password: ''
    }
  }

  componentDidMount(){
    this.props.currentUser && this.handleInitialState(this.props.currentUser)
  }

  componentDidUpdate(prevProps){
    this.props.currentUser && !prevProps.currentUser && this.handleInitialState(this.props.currentUser)
  }

  componentWillUnmount(){
    this.setState(() => {return {id: '', name: '', username: '', password: ''}})
  }

  handleInitialState = (user) => {
    this.setState(() => {
      return {
        id: parseInt(user.id),
        name: user.attributes.name,
        username: user.attributes.username
        }
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState(state => {
      return {
        ...this.state,
        [name]: value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateUser(this.state, this.props.history)
  }

  render(){
    return (
      <div>
        <h2>Edit Profile</h2>
          <form onSubmit={this.handleSubmit}>
            <label >Name:</label>
            <input type='text' name='name' id='name' placeholder="name" value={this.state.name} onChange={this.handleChange} />
            <br/>
            <label >Username:</label>
            <input type='text' name='username' id='username' placeholder="username" value={this.state.username} onChange={this.handleChange} />
            <br/>
            <label >Password:</label>
            <input type='password' name='password' id='password' placeholder="new password" value={this.state.password} onChange={this.handleChange} />
            <br/>
            <input type="submit" value="Submit"></input>
          </form>
      </div>
  )}

}

const mapStateToProps = state => {
  const currentUser = state.currentUser ? state.currentUser : null
  return({
    currentUser: currentUser
  })
}

export default connect(mapStateToProps, {updateUser})(EditUserForm)
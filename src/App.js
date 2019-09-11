import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyPlants from './components/MyPlants.js'
import { Route, withRouter, Switch} from 'react-router-dom'
import NewPlantFormContainer from './components/NewPlantFormContainer'
import EditPlantFormContainer from './components/EditPlantFormContainer'
import PlantCard from './components/PlantCard'


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }
  render(){
    const { plants } = this.props
      return (
        <>
        <NavBar />
        <div className='center main'>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' render={({history})=> <Signup history={history}/>} />
            <Route exact path='/plants' component={MyPlants}/>
            <Route exact path='/plants/new' component={NewPlantFormContainer}/>
            <Route exact path='/plants/:id' render={props => {
              const plant = plants.find(plant => {
                return parseInt(plant.id) === parseInt(props.match.params.id)
                })
              return <PlantCard plant={plant ? plant : null } key={props.match.params.id} {...props} />
              }
            } />
            <Route exact path='/plants/:id/edit' render={props => {
              const plant = plants.find(plant => {
                return parseInt(plant.id) === parseInt(props.match.params.id)
                })
              return <EditPlantFormContainer plant={plant} {...props}/>
            }
          }/>
          </Switch>
        </div>
        </>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    plants: state.myPlants,
    currentUser: state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

//import components to be used for Route
import UserContainer from './UserContainer'
import ChallengeContainer from './ChallengeContainer'
import Navbar from '../components/navbar/Navbar'
import RegisterForm from '../components/login/RegisterForm'
import LoginForm from '../components/login/LoginForm'
import ChallengeForm from '../components/challenges/ChallengeForm'
import About from '../components/about'

//import actions to be passed to components
import { registerUser } from '../actions/actionUser'

import { connect } from 'react-redux'

class App extends Component {
    render() {

        let { isFetching, isAuthenticated, message } = this.props.user
        let { registerUser } = this.props

        return (
            <Router>
                <Navbar isAuthenticated={ isAuthenticated } />
                <Route exact path="/" component={ ChallengeContainer } />
                <Route exact path="/newchallenge" component={ ChallengeForm } />
                <Route exact path="/userpage" component={ UserContainer } />
                <Route exact path='/login' component={props => <LoginForm { ...props } message={ message } isFetching={isFetching} isAuthenticated={isAuthenticated} /> } />
                <Route exact path="/registration" render={props => <RegisterForm { ...props } message={ message } registerUser={ registerUser } />} />
                <Route exact path="/about" component={ About } />
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, { registerUser })(App)
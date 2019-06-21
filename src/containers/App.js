import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

//import components to be used for Route
import UserContainer from './UserContainer'
import ChallengeContainer from './ChallengeContainer'
import Navbar from '../components/navbar/Navbar'
import RegisterForm from '../components/login/RegisterForm'
import LoginForm from '../components/login/LoginForm'
import ChallengeForm from '../components/challenges/ChallengeForm'

import { connect } from 'react-redux'

class App extends Component {
    render() {
        
        let { isAuthenticated } = this.props.user

        return (
            <Router>
                <div>
                    <Navbar isAuthenticated={isAuthenticated} />
                    <Route exact path="/" component={ ChallengeContainer } />
                    <Route exact path="/newchallenge" component={ ChallengeForm } />
                    <Route exact path="/userpage" component={ UserContainer } />
                    <Route exact path='/login' component={ LoginForm } />
                    <Route exact path="/registration" component={ RegisterForm } />
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App)
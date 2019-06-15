import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from '../App'
import UserContainer from './UserContainer'
import ChallengeContainer from './ChallengeContainer'
import Navbar from '../components/navbar/Navbar'
import RegisterForm from '../components/login/RegisterForm'
import LoginForm from '../components/login/LoginForm'

class NavbarContainer extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={ ChallengeContainer } />
                    <Route exact path="/userpage" component={ UserContainer } />
                    <Route exact path='/login' component={ LoginForm } />
                    <Route exact path="/registration" component={ RegisterForm } />
                </div>
            </Router>
        )
    }
}

export default NavbarContainer
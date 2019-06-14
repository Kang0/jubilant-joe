import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from '../App'
import UserContainer from './UserContainer'
import Navbar from '../components/navbar/Navbar'
import Registration from '../components/user/RegisterUser'

class NavbarContainer extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={ App } />
                    <Route exact path='/login' component={ UserContainer } />
                    <Route exact path="/registration" component={ Registration } />
                </div>
            </Router>
        )
    }
}

export default NavbarContainer
import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from '../App'
import Login from '../containers/LoginContainer'
import Navbar from '../components/navbar/Navbar'

class NavbarContainer extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={App} />
                    <Route exact path='/login' component={Login} />
                    {/* <Route exact path="/login" component={User} /> */}
                </div>
            </Router>
        )
    }
}

export default NavbarContainer
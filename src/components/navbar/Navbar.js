import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const link = {
        width: '150px',
        padding: '8px',
        margin: '0 6px 6px',
        background: 'blue',
        textDecoration: 'none',
        color: 'white',
    }

    return(
        <div>
            <NavLink
            to="/"
            /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            exact
            /* add styling to Navlink */
            style={link}
            /* add prop for activeStyle */
            activeStyle={{
                background: 'darkblue'
            }}
            >Home</NavLink>
            <NavLink
            to="/userpage"
            /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            exact
            /* add styling to Navlink */
            style={link}
            /* add prop for activeStyle */
            activeStyle={{
                background: 'darkblue'
            }}
            >User Page</NavLink>
            <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >About</NavLink>

            <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Login</NavLink>

            <NavLink
            to="/registration"
            exact
            style={link}
            activeStyle={{background: 'darkblue'}}>
                Register
            </NavLink>
        </div>
    )
}

export default Navbar
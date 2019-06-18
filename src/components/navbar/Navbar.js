import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'

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
            <Menu>
                <Menu.Item icon="quidditch" />
                <Menu.Item name='home' as={Link} to='/' />
                <Menu.Item name="new challenge" as={Link} to="/newchallenge" />
                <Menu.Item name='user' as={Link} to='/userpage' />
                <Menu.Item name='about' as={Link} to='/about' />
                <Menu.Item name='login' as={Link} to='/login' />
                <Menu.Item name='registration' as={Link} to='/registration' />
            </Menu>
        </div>

        // <div>
        //     <NavLink
        //     to="/"
        //     exact
        //     style={link}
        //     activeStyle={{
        //         background: 'darkblue'
        //     }}
        //     >Home</NavLink>

        //     <NavLink
        //     to="/userpage"
        //     exact
        //     style={link}
        //     activeStyle={{
        //         background: 'darkblue'
        //     }}
        //     >User Page</NavLink>

        //     <NavLink
        //     to="/about"
        //     exact
        //     style={link}
        //     activeStyle={{
        //         background: 'darkblue'
        //     }}
        //     >About</NavLink>

        //     <NavLink
        //     to="/login"
        //     exact
        //     style={link}
        //     activeStyle={{
        //         background: 'darkblue'
        //     }}
        //     >Login</NavLink>

        //     <NavLink
        //     to="/registration"
        //     exact
        //     style={link}
        //     activeStyle={{background: 'darkblue'}}>
        //         Register
        //     </NavLink>
        // </div>
    )
}

export default Navbar
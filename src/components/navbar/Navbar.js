import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const Navbar = ({ isAuthenticated }) => {

    return(isAuthenticated ? loggedIn() : loggedOut())

}

const loggedIn = () => {
    return (
        <>
            <Menu>
                <Menu.Item icon="meh outline" />
                <Menu.Item name='home' as={Link} to='/' />
                <Menu.Item name="new challenge" as={Link} to="/newchallenge" />
                <Menu.Item name='user' as={Link} to='/userpage' />
                <Menu.Item name='about' as={Link} to='/about' />
            </Menu>
        </>  
    )
}

const loggedOut = () => {
    return (
        <>
            <Menu>
                <Menu.Item icon="meh outline" />
                <Menu.Item name='login' as={Link} to='/login' />
                <Menu.Item name='registration' as={Link} to='/registration' />
            </Menu>
        </>
    )
}

export default Navbar
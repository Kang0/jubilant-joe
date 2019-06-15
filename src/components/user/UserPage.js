import React from 'react'

const UserPage = props => {
    let { username, email } = props.user
    return(
        <div>
            <h1>{ username }</h1>
            <p>{ email }</p>
        </div>
    )
}

export default UserPage

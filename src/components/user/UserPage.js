import React from 'react'
import { Icon } from 'semantic-ui-react'

const UserPage = props => {
    let { username, email } = props.user
    return(
        <>
            <h1><Icon name="user outline" />{ username }</h1>
            <h3><Icon name="mail outline" />{ email }</h3>
        </>
    )
}

export default UserPage

import React from 'react'
import { Icon, Grid } from 'semantic-ui-react'

const UserPage = props => {
    let { username, email } = props.user
    return(
        <>
            <Grid.Row>
                <h1><Icon name="user outline" />{ username }</h1>
            </Grid.Row>
            <Grid.Row>
                <h3><Icon name="mail outline" />{ email }</h3>
            </Grid.Row>
        </>
    )
}

export default UserPage

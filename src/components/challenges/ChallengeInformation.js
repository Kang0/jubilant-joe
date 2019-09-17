import React from 'react';
import '../../index.css';
import moment from 'moment';
import { Icon, Segment, Header, Grid, Button } from 'semantic-ui-react';

const circle = { width: 125, height: 125 }

const ChallengeInformation = props => {

    let { daysLeft, dayCreated, lastDay, handleOnButtonClick, clicked, id } = props
    let daysCompleted = 100 - daysLeft
    let fullStartDate = moment(dayCreated, "MM-DD-YYYY").format("dddd, MMMM Do YYYY")
    let fullEndDate = moment(lastDay, "MM-DD-YYYY").format("dddd, MMMM Do YYYY")

    return(
        <Grid.Column className="information">
            <Grid columns={2}>
                <Grid.Column>
                    <Segment circular style={circle} color={clicked ? "green" : "red"} vertical>
                        <Header as="h3">
                            Day {daysCompleted}
                        </Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                    {clicked ? <Button basic color="red" disabled>Already clicked today</Button> : <Button id={id} basic color="green" onClick={event => handleOnButtonClick(event)}>Completed Today</Button>}
                </Grid.Column>
            </Grid>
            <Segment color="green">
                <Header as="h4">
                    {fullStartDate}
                </Header>
                <Header.Subheader>Start Date</Header.Subheader>
            </Segment>
            <Icon name="long arrow alternate down" size="huge"></Icon>
            <Segment color="red">
                <Header as="h4">
                    {fullEndDate}
                </Header>
                <Header.Subheader>End Date</Header.Subheader>
            </Segment>
        </Grid.Column>
    )
}

export default ChallengeInformation
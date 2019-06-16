import React, { Component } from 'react'
import { connect } from 'react-redux'
//import challenge components
import ChallengeForm from '../components/challenges/ChallengeForm'
import DisplayChallenges from '../components/challenges/DisplayChallenges'
//import challenge actions
import { postChallenge, getChallenges, buttonClickUpdateChallenge, getUserChallenges, createCalendar } from '../actions/actionChallenge'
import { clickAddTwoCurrency, getLocker } from '../actions/actionLocker'
//import semantic ui
import { Container, Grid, Segment } from 'semantic-ui-react'

class ChallengeContainer extends Component {

    componentDidMount() {
        this.props.getUserChallenges()
        this.props.getLocker()
        // this.props.createCalendar("06-15-2019", "09-20-2019") //takeout
    }

    render () {
        return (
            <React.Fragment>
                <Grid padded>
                    <Grid.Row centered>
                        <DisplayChallenges 
                            challenges={this.props.challenges}
                            buttonClick={this.props.buttonClickUpdateChallenge}
                            clickAddTwoCurrency={this.props.clickAddTwoCurrency} 
                        />
                    </Grid.Row>
                    <Grid.Row centered>
                        <Segment>
                            <ChallengeForm postChallenge={this.props.postChallenge} />
                        </Segment>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        challenges: state.challenges,
        locker: state.locker
    }
}

export default connect(mapStateToProps, {
    postChallenge,
    getChallenges,
    buttonClickUpdateChallenge,
    getUserChallenges,
    clickAddTwoCurrency,
    getLocker,
    createCalendar
    })
    (ChallengeContainer)
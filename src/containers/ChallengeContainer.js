import React, { Component } from 'react'
import { connect } from 'react-redux'
//import challenge components
import DisplayChallenges from '../components/challenges/DisplayChallenges'
//import challenge actions
import { getChallenges, buttonClickUpdateChallenge, getUserChallenges, deleteChallenge } from '../actions/actionChallenge'
import { clickAddTwoCurrency, getLocker } from '../actions/actionLocker'
//import semantic ui
import { Grid } from 'semantic-ui-react'


class ChallengeContainer extends Component {

    componentDidMount() {
        this.props.getUserChallenges()
        // this.props.getLocker()
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
                            deleteChallenge={this.props.deleteChallenge}
                        />
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        challenges: state.challenges
    }
}

export default connect(mapStateToProps, {
    getChallenges,
    buttonClickUpdateChallenge,
    getUserChallenges,
    clickAddTwoCurrency,
    deleteChallenge
})(ChallengeContainer)
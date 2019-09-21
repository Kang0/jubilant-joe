import React, { Component } from 'react'
import { connect } from 'react-redux'
//import challenge components
import DisplayChallenges from '../components/challenges/DisplayChallenges'
//import challenge actions
import { buttonClickUpdateChallenge, getUserChallenges, deleteChallenge } from '../actions/actionChallenge'
import { getUserCalendar } from '../actions/actionCalendar'
import { clickAddTwoCurrency } from '../actions/actionLocker'
//import semantic ui
import { Grid } from 'semantic-ui-react'


class ChallengeContainer extends Component {

    componentDidMount() {
        this.props.getUserChallenges()
        this.props.getUserCalendar()
    }

    render () {
        let { challenges, buttonClickUpdateChallenge, clickAddTwoCurrency, deleteChallenge } = this.props
        return (
            <React.Fragment>
                <Grid padded>
                    <Grid.Row centered>
                        <DisplayChallenges 
                            challenges={ challenges }
                            buttonClick={ buttonClickUpdateChallenge }
                            clickAddTwoCurrency={ clickAddTwoCurrency }
                            deleteChallenge={ deleteChallenge }
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
    buttonClickUpdateChallenge,
    getUserChallenges,
    clickAddTwoCurrency,
    deleteChallenge,
    getUserCalendar
})(ChallengeContainer)
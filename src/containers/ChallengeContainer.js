import React, { Component } from 'react'
import { connect } from 'react-redux'
//import challenge components
import ChallengeForm from '../components/challenges/ChallengeForm'
import DisplayChallenges from '../components/challenges/DisplayChallenges'
//import challenge actions
import { postChallenge, getChallenges, buttonClickUpdateChallenge, getUserChallenges } from '../actions/actionChallenge'
import { clickAddTwoCurrency, getLocker } from '../actions/actionLocker'

class ChallengeContainer extends Component {

    componentDidMount() {
        this.props.getUserChallenges()
        this.props.getLocker()
    }

    render () {
        return (
            <div>
                <ChallengeForm postChallenge={this.props.postChallenge} />
                <DisplayChallenges 
                    challenges={this.props.challenges}
                    buttonClick={this.props.buttonClickUpdateChallenge}
                    clickAddTwoCurrency={this.props.clickAddTwoCurrency} 
                />
            </div>
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
    getLocker 
    })
    (ChallengeContainer)
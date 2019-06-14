import React, { Component } from 'react'
import { connect } from 'react-redux'
//import challenge components
import ChallengeForm from '../components/challenges/ChallengeForm'
import DisplayChallenges from '../components/challenges/DisplayChallenges'
//import challenge actions
import { postChallenge, getChallenges, buttonClickUpdateChallenge, getUserChallenges } from '../actions/actionChallenge'

class ChallengeContainer extends Component {

    componentDidMount() {
        this.props.getUserChallenges()
    }

    render () {
        return (
            <div>
                <ChallengeForm postChallenge={this.props.postChallenge} />
                <DisplayChallenges challenges={this.props.challenges} buttonClick={this.props.buttonClickUpdateChallenge} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        challenges: state.challenges
    }
    //challenges will eventually have to filter the only the user's challenges
}

export default connect(mapStateToProps, { postChallenge, getChallenges, buttonClickUpdateChallenge, getUserChallenges })(ChallengeContainer)
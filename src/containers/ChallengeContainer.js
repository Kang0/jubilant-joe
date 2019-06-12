import React, { Component } from 'react'
import { connect } from 'react-redux'
//import challenge components
import CreateChallenge from '../components/challenges/CreateChallenge'
import DisplayChallenges from '../components/challenges/DisplayChallenges'
//import challenge actions
import { postChallenge, getChallenges } from '../actions/challenges/actionChallenge'

class ChallengeContainer extends Component {

    componentDidMount() {
        this.props.getChallenges()
    }

    render () {
        return (
            <div>
                <CreateChallenge postChallenge={this.props.postChallenge}/>
                <DisplayChallenges challenges={this.props.challenges}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        challenges: state.manageChallenge.challenges
    }
}

export default connect(mapStateToProps, { postChallenge, getChallenges })(ChallengeContainer)
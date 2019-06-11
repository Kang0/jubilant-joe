import React, { Component } from 'react'
import { connect } from 'react-redux'
//import challenge components
import CreateChallenge from '../components/challenges/CreateChallenge'
//import challenge actions
import { postChallenge } from '../actions/challenges/actionChallenge'

class ChallengeContainer extends Component {

    render () {
        return (
            <div>
                <CreateChallenge postChallenge={this.props.postChallenge}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        challenge: state
    }
}

export default connect(mapStateToProps, { postChallenge })(ChallengeContainer)
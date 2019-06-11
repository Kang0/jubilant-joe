import React, { Component } from 'react'
import { connect } from 'react-redux'
//import challenge components
import CreateChallenge from '../components/challenges/CreateChallenge'
//import challenge actions
import { addChallenge, postChallenge } from '../actions/challenges/actionChallenge'

class ChallengeContainer extends Component {

    render () {
        return (
            <div>
                <CreateChallenge addChallenge={this.props.addChallenge}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        challenge: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addChallenge: formData => dispatch(postChallenge(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer)
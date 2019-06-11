import React, { Component } from 'react'
import { connect } from 'react-redux'

import CreateChallenge from '../components/challenges/CreateChallenge'

class ChallengeContainer extends Component {

    render () {
        return (
            <div>
                <CreateChallenge />
            </div>
        )
    }
}

export default ChallengeContainer
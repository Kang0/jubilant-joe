import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChallengeMediaContainer extends Component {
    render(){
        debugger
        return(
            <p>hi</p>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let { id } = ownProps
    return{
        selectedDate: state.calendar.find(challenge => challenge[id])
    }
}

export default connect(mapStateToProps)(ChallengeMediaContainer)
import React from 'react';

const DisplayChallenges = (props) => {
    console.log(props)
    const { challenges } = props
    const renderChallenge = challenges.map(challenge => {
        return(
            <li>
                {challenge.name}
            </li>
        )
    })
    return(
        <div>
            {renderChallenge}
        </div>
    )
}

export default DisplayChallenges
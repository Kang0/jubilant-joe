import React from 'react';

const DisplayChallenges = ({ challenges }) => {
    console.log(challenges)
    const renderChallenge = challenges.map(challenge => {
        return(
            <li key={challenge.id}>
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
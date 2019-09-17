import React from 'react';

const UserLocker = props => {
    let { currency } = props.locker
    return (
        <div>
            <h4>Currency: { currency }</h4>
        </div>
    )
}

export default UserLocker
    

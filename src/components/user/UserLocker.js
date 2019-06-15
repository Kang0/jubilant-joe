import React from 'react';

const UserLocker = props => {
    let { currency } = props.locker
    return (
        <div>
            <h4>Welcome to your locker!</h4>
            <p>Currency: { currency }</p>
        </div>
    )
}

export default UserLocker
    

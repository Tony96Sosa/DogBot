import React from 'react';
import beagle from '../../../assets/images/img2.jpg';
import './UserItem.css';

const UserItem = ({ text }) => {
    return(
        <div className='user-item-container'>
            <div className='user-item-messages'>
                <label>{ text }</label>
            </div>
            <img src={beagle} alt='avatar-user' />
        </div>
    )
}

export default UserItem;
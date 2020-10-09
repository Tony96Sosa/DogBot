import React from 'react';
import pitbull from '../../../assets/images/img1.jpg'
import './DogItem.css';

const DogItem = ({ text }) => {
    return(
        <div className='dog-item-container'>
            <img src={pitbull} alt='avatar-cachorro' />
            <div className='dog-item-messages'>
                {
                    text.map((info, index) => 
                        <label key={index}>{ info }</label>
                    )
                }
            </div>
        </div>
    )
}

export default DogItem;
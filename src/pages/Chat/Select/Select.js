import React from 'react';
import beagle from '../../../assets/images/img2.jpg';
import './Select.css';

const Select = ({ options, handleSelectedOptions }) => {
    return(
        <div className='user-item-container'>
            <div className='user-item-messages'>
                <div className='selector-container'>
                    <div className='selector-content'>
                        { options.map((option) =>
                            <div 
                                key={option.id} 
                                className='selector-options' 
                                onClick={ () => handleSelectedOptions(option.id) }>
                                {option.text}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <img src={beagle} alt='avatar-user' />
        </div>
    )
}

export default Select;
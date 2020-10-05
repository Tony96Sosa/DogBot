import React from 'react';
import Lottie from 'react-lottie';
import animationDog from './pitbull.json'; 
import './Dog.css';

const Dog = ({ history }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationDog,
      };

      const handleOnClick= () => {
        console.log('Evento Click');
        history.push('/chat');
      }

    return(
        <div onClick={handleOnClick}
            className='dog-container'>
            <Lottie options={defaultOptions}
                />
        </div>
    )
}

export default Dog;
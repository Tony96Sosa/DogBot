import React from 'react';
import Dog from './components/Dog/Dog';
import Fade from 'react-reveal/Fade';
import './Home.css';

const Home = ({ history }) => {
    return(
        <div className='home-dogbot-container'>
            <div className='home-dogbot-content'>
                <Dog history={history}/>
                <div className='home-dogbot-greeting'>
                    <Fade left big cascade>
                        <h1>¡Hola humano!</h1>
                    </Fade>
                    <Fade right big cascade>
                        <label>¿Queres charlar?</label>
                        <label>Click sobre mi para charlar.</label>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Home;
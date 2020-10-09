import React, { useState, useEffect } from 'react';
import DogItem from './DogItem/DogItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';
import Select from './Select/Select';
import { doing, aboutMe } from '../../data/actions';
import Fade from 'react-reveal/Fade';
import './Chat.css';

const Chat = () => {
    let idCounter = 0;
    const [ openSelect, setOpenSelect ] = useState(false);
    const [ msg, setMsg ] = useState({});
    const [ chat, setChat ] = useState([
        {
            id: 0,
            emitter:'Dog',
            msg:['Hola', '¿Cúal es tu nombre?']
        }
    ]);

    const firstResponse = async (name) => {
        let newChat={
            id: idCounter + 2,
            emitter: 'Dog',
            msg: [`¡Mucho gusto ${name}!`,
            'Yo soy Leonidas, un DogBot en desarrollo.',
            'Podemos charlar tranki, con algunas preguntas particulares.',
            'Que te diviertas. =p']
        }
        if(newChat){
            await setChat([ ...chat, newChat]);
        }
    }

    useEffect(() => {
        if(chat.length === 2){
            setTimeout(() => firstResponse(msg.msg), 500);
            setMsg({ ...msg, msg: '' });
            setTimeout(() => setOpenSelect(true), 600)
        }
    }, [chat]);

    const getMessage = async (value) => {
        idCounter = idCounter + 1;
        await setMsg({
            id: idCounter,
            emitter: 'User',
            msg: value
        })
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        await setChat([ ...chat, msg ])
    };

    let selectedOptions = [
        {
            id: 'What are you doing?',
            text: '¿Qué hacés?'
        },
        {
            id: 'Tell me about you',
            text: 'Contame sobre vos'
        } 
    ];

    const [ interactions, setInteractions ] = useState([]);

    const handleSelectedOptions = (value) => {
        let result;
        switch(value) {
            case 'What are you doing?':
                result = doing[Math.floor(Math.random() * doing.length)]
                if(result) {
                    setInteractions([ ...interactions, result.msg])
                }
                break;
            case 'Tell me about you':
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)]
                if(result) {
                    setInteractions([ ...interactions, result.msg])
                }
                break;
        }
    }

    return(
        <div className='chabot-chat-container'>
            <div className='chabot-chat-content'>
                <div className='chabot-chat'>
                    <div className='chabot-chat-container-body'>
                        {chat.map(({ id, emitter, msg }) => 
                                emitter === 'Dog' ?
                                    <Fade left>
                                        <DogItem 
                                            key={id.toString()}
                                            text={msg}/>
                                    </Fade>
                                :
                                    <Fade right>
                                        <UserItem 
                                            text={msg}/>
                                    </Fade>   
                        )}
                        {
                            openSelect && 
                            <Fade right>
                                    <Select 
                                    options={selectedOptions} 
                                    handleSelectedOptions={handleSelectedOptions}/>
                            </Fade>
                        } 
                        { interactions.length > 0 && interactions.map((interaction, index) => 
                            <>
                                <DogItem key={index+interaction} text={interaction} />
                                <Select options={selectedOptions} 
                                    handleSelectedOptions={handleSelectedOptions} />
                            </>
                            )
                        }
                    </div>
                    <div className='chabot-chat-container-input'>
                        <InputChat 
                            msg={msg}
                            getMessage={getMessage}
                            sendMessage={sendMessage}
                            chat={chat}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;
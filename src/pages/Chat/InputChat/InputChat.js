import React from 'react';
import './InputChat.css';

const InputChat = ({ sendMessage, getMessage, msg, chat }) => {
    return(
        <form 
            onSubmit={ (e) => sendMessage(e) }
            className='chatbot-chat-input-conatiner'>
            <input 
                disabled={ chat.length >= 3 ? true : false }
                placeholder={ chat.length >= 3 ? 'Ya no podés escribir...' : 'Escribí tu nombre'}
                type='text'
                value={msg.msg}
                onChange={ (e) => getMessage(e.target.value) }/>
            <button type='submit'/>
        </form>
    )
}

export default InputChat;
import React from 'react';
import s from './../Dialogs.module.css';



const Message = (props) => {
    let messageRef = React.createRef();

    const addMessage = () => {
        props.addMessage()
    }

const onMessageChange = () => {
    let text = messageRef.current.value;
    props.updateNewMessageText(text);
}

    return (
        <div className={s.message}>
            {props.message}
            <p><textarea onChange={onMessageChange}
             ref={messageRef}
             value={props.newMessageData}> </textarea></p>
            <p><button onClick={addMessage}> Answer </button></p>
        </div>
        );
}


export default Message;
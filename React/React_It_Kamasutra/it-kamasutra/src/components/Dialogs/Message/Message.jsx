import React from 'react';
import s from './../Dialogs.module.css';



const Message = (props) => {
    let messageRef = React.createRef();
    const addMessage = () => {
        let currentMes = messageRef.current.value;
        alert(currentMes);
    }

    return (
        <div className={s.message}>
            {props.message}
            <p><textarea ref={messageRef}> </textarea></p>
            <p><button onClick={addMessage}> Answer </button></p>
        </div>
        );
}


export default Message;
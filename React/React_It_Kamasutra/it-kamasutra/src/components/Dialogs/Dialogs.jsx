import { checkPropTypes } from 'prop-types';
import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let messageRef = React.createRef();
    let dialogItem = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> )

    let message = props.messagesData.map(m => <Message message={m.message}
        newMessageData = {props.newMessageData}
        dispatch = {props.dispatch}/>);

    const onAddMessage = () => {
        props.AddMessage();
    }

    const onMessageChange = () => {
        let text = messageRef.current.value;
        props.MessageChange(text);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogItem}
                </div>
                <div className={s.messages}>
                    {message}
                    <p><textarea onChange={onMessageChange}
                    ref={messageRef}
                    value={props.newMessageData}> </textarea></p>
                    <p><button onClick={onAddMessage}> Answer </button></p>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
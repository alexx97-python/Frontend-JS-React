import { checkPropTypes } from 'prop-types';
import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let messageRef = React.createRef();
    let dialogItem = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> )

    let message = props.dialogsPage.messagesData.map(m => <Message message={m.message}
        newMessageData = {props.dialogsPage.newMessageData}
        dispatch = {props.dispatch}/>);

    const addMessage = () => {
        props.dispatch( addMessageActionCreator() );
    }

    const onMessageChange = () => {
        let text = messageRef.current.value;
        props.dispatch( onMessageChangeActionCreator(text));
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
                    <p><button onClick={addMessage}> Answer </button></p>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
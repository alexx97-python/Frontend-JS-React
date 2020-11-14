import { checkPropTypes } from 'prop-types';
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogItem = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> )

    let message = props.dialogsPage.messagesData.map(m => <Message message={m.message}
        newMessageData = {props.dialogsPage.newMessageData}
        dispatch = {props.dispatch}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogItem}
                </div>
                <div className={s.messages}>
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
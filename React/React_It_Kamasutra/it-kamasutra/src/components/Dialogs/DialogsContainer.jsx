import { checkPropTypes } from 'prop-types';
import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
    let state = props.store.getState();
    
    const AddMessage = () => {
        props.store.dispatch( addMessageActionCreator() );
    }

    const MessageChange = (text) => {
        props.dispatch( onMessageChangeActionCreator(text));
    }


    return (
        <Dialogs
        dialogsData={state.dialogsPage.dialogsData}
        messagesData={state.dialogsPage.messagesData} 
        newMessageData={state.dialogsPage.newMessageData}
        AddMessage={AddMessage}
        MessageChange={MessageChange}/>
    );
}

export default DialogsContainer;
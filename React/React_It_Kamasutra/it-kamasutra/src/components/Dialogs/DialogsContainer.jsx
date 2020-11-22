import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



//Первая функция возвращает данные из state
let mapStateToProps = (state) => {
    return {
         dialogsPage: state.dialogsPage,
         newMessageData : state.dialogsPage.newMessageData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddMessage: () => {
            dispatch(addMessageActionCreator() );
        },
        MessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
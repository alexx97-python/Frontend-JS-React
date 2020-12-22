import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



//Первая функция возвращает данные из state
let mapStateToProps = (state) => {
    return {
         dialogsPage: state.dialogsPage,
         newMessageData : state.dialogsPage.newMessageData,
         isAuth : state.auth.isAuth
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

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

/* let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); */

export default DialogsContainer;
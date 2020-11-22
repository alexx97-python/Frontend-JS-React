const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}],
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Lesha'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Zakhar'},
        {id: 5, name: 'Vova'}],
    newMessageData: 'write your message'
};

const dialogsReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:{
            let newMessage = {
                id: 6,
                message: state.newMessageData
            }
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageData = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            let stateCopy = {...state};
            stateCopy.newMessageData = action.newMessage;
            return stateCopy;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const onMessageChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    }
}

export default dialogsReducer;
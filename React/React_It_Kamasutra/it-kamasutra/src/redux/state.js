const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {

    _state: {profilePage: {
        postData: [
        {id: 1, post: 'Hi, how are you?', likesCount: 12},
        {id: 2, post: 'It\'s my first post', likesCount: 15},
        {id: 3, post: 'Hi', likesCount: 25},
        {id: 4, post: 'Hi', likesCount: 19},
        {id: 5, post: 'Hi', likesCount: 9}],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage : {
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
    },
    sidebar: {}
},
    getState () {
        return this._state;
    },
    _callSubscriber () {
        console.log('State was changed');
    },
    /* addPost () {
        let newPost = {
            id: 6,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    }, */
    /* addMessage () {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageData
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageData = '';
        this._callSubscriber(this._state);
    }, */
    /* updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageData = newMessage;
        this._callSubscriber(this._state);
    }, */
    /* updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    }, */
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){ // action = { type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageData
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageData = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageData = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default store;
window.store = store;


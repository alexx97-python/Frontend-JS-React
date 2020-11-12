/* 
let rerenderEntiretree = () => {
    console.log('State was changed');
}


let _state = {
    profilePage: {
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
}

window._state = _state;

export const addPost = () => {

    let newPost = {
        id: 6,
        post: _state.profilePage.newPostText,
        likesCount: 0
    };
    _state.profilePage.postData.push(newPost);
    _state.profilePage.newPostText = '';
    rerenderEntiretree(_state);
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: _state.dialogsPage.newMessageData
    }
    _state.dialogsPage.messagesData.push(newMessage);
    _state.dialogsPage.newMessageData = '';
    rerenderEntiretree(_state);
}

export const updateNewMessageText = (newMessage) => {
    _state.dialogsPage.newMessageData = newMessage;
    rerenderEntiretree(_state);
}

export const updateNewPostText = (newText) => {

    _state.profilePage.newPostText = newText;
    rerenderEntiretree(_state);
}

export const subscribe = (observer) => {
    rerenderEntiretree = observer;
}

 */
// export default _state;

// store - OOP 


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
    addPost () {
        debugger;
        let newPost = {
            id: 6,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    addMessage () {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageData
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageData = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageData = newMessage;
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}
export default store;
window.store = store;


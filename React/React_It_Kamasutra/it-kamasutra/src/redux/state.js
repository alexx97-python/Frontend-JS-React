
let rerenderEntiretree = () => {
    console.log('State was changed');
}


let state = {
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

window.state = state;

export const addPost = () => {

    let newPost = {
        id: 6,
        post: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntiretree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageData
    }
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageData = '';
    rerenderEntiretree(state);
}

export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageData = newMessage;
    rerenderEntiretree(state);
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntiretree(state);
}

export const subscribe = (observer) => {
    rerenderEntiretree = observer;
}


export default state;

// store - OOP 
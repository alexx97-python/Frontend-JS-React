import { rerenderEntiretree } from "../render";


let state = {
    profilePage: {
        postData: [
        {id: 1, post: 'Hi, how are you?', likesCount: 12},
        {id: 2, post: 'It\'s my first post', likesCount: 15},
        {id: 3, post: 'Hi', likesCount: 25},
        {id: 4, post: 'Hi', likesCount: 19},
        {id: 5, post: 'Hi', likesCount: 9}]
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
        {id: 5, name: 'Vova'}]
    },
    sidebar: {}
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 6,
        post: postMessage,
        likesCount: 0
    };

    state.profilePage.postData.push(newPost);
    rerenderEntiretree(state);

}


export default state;
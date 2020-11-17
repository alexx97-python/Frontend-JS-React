const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
    {id: 1, post: 'Hi, how are you?', likesCount: 12},
    {id: 2, post: 'It\'s my first post', likesCount: 15},
    {id: 3, post: 'Hi', likesCount: 25},
    {id: 4, post: 'Hi', likesCount: 19},
    {id: 5, post: 'Hi', likesCount: 9}],
    newPostText: 'it-kamasutra.com'
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                post: state.newPostText,
                likesCount: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
            
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
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

export default profileReducer;
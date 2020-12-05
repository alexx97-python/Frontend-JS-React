const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postData: [
    {id: 1, post: 'Hi, how are you?', likesCount: 12},
    {id: 2, post: 'It\'s my first post', likesCount: 15},
    {id: 3, post: 'Hi', likesCount: 25},
    {id: 4, post: 'Hi', likesCount: 19},
    {id: 5, post: 'Hi', likesCount: 9}
],
    newPostText: 'it-kamasutra.com',
    profile: null
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                post: state.newPostText,
                likesCount: 0
            };
            /* let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = ''; */
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            /* let stateCopy = {...state};
            stateCopy.newPostText = action.newText; */
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export default profileReducer;
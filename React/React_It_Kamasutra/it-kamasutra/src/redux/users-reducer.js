import { useReducer } from "react"

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users : [
        {id: 1, photoUrl: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg', followed: false, fullName: 'Oleksii Sheiko', status: 'I am a React Developer', location :{city: 'Kiev', country: 'Ukraiene'}},
        {id: 2, photoUrl: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg', followed: true, fullName: 'Vovan Kovalenko', status: 'I am a .Net Developer', location :{city: 'Kiev', country: 'Ukraiene'}},
        {id: 3, photoUrl: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg', followed: false, fullName: 'Zakhar Ruban', status: 'I am a Website Owner', location :{city: 'Akhtyrka', country: 'Ukraiene'}},
        {id: 4, photoUrl: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg', followed: true, fullName: 'Oleksander ProstoBes', status: 'I am a IOS Developer', location :{city: 'Kiev', country: 'Ukraiene'}},
        {id: 5, photoUrl: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg', followed: false, fullName: 'Vladislav ', status: 'I am a Lawyer', location :{city: 'Kiev', country: 'Ukraiene'}}
    ]
}

// Reducer
const usersReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                 users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                 })
                }
        case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId){
                            return {...u, followed:false}
                        }
                        return u;
                    })
                }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }

}


//Action Creators
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
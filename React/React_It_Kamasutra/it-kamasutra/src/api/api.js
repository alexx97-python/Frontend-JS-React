import * as axios from 'axios';


//Const

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'db44e054-f14d-4d49-980a-a7c461a88d61'
    }
});

export const usersAPI = {
    getUsers (currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
              .then(response => {
                  return response.data;
                });
    },
    getUserProfile (userId) {
        return instance.get('profile/' + userId);
    },
    unfollowUser (userId) {
        return instance
            .delete(`follow/`+ userId);
    },
    followUser (userId) {
        return instance
            .post(`follow/` + userId);
    }
}


export const authAPI = {
    getAuthData () {
        return instance
            .get('auth/me/');
    }
}

/* export const getUsers = (currentPage=1, pageSize=10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => {
              return response.data;
            });
}

export const getUserProfile = (userId) => {
    return instance.get('profile/' + userId);
}

export const unfollowUser = (userId) => {
    return instance.delete(`follow/`+ userId);
}

export const followUser = (userId) => {
    return instance.post(`follow/` + userId);
} */
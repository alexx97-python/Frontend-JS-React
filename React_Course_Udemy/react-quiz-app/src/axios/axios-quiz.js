import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-b307f-default-rtdb.firebaseio.com/'
})
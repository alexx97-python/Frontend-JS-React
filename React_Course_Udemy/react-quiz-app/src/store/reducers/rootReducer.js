import {combineReducers} from 'redux';
import authReducer from './auth';
import createReducer from './create_quiz';
import quizReducer from './quiz';

export default combineReducers({
    quiz: quizReducer,
    create: createReducer,
    auth: authReducer
})
import {combineReducers, createStore} from 'redux';
import itemsReducer from './items_reducer';

let reducers = combineReducers({
        catalogOfItems: itemsReducer,
})


let store = createStore(reducers);

window.store = store;

export default store;
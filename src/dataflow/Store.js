import {createStore} from 'redux';
import rootReducer from './RootReducer';
import {combineReducers} from 'redux';

const store = createStore(
    combineReducers(rootReducer)
);
global.store = store;
global.dispatch = store.dispatch;
export default store;

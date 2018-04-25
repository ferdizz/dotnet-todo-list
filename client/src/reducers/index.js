import { combineReducers } from 'redux';
import user from './user';
import todos from './todos';
import admin from './admin';

const combinedReducer = combineReducers({
    user,
    todos,
    admin,
})

export default combinedReducer;
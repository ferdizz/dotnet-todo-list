import { combineReducers } from 'redux';
import user from './user';
import todos from './todos';

const combinedReducer = combineReducers({
    user,
    todos
})

export default combinedReducer;
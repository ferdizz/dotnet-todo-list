import * as types from '../actions/actionTypes';

const initialState = {}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            // TODO
            return state;
        default:
            return state;
    }
}

export default todos;
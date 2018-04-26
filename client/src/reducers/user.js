import * as types from '../actions/actionTypes';

const initialState = {}

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN:
            return Object.assign({}, state, action.user);
        case types.LOG_OUT:
            return Object.assign({}, initialState, {});
        case types.SET_STATUS:
            return Object.assign({}, state, action.status);
        default:
            return state;
    }
}

export default user;
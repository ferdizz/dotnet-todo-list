import * as types from '../actions/actionTypes';

const initialState = {}

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN:
            // TODO
            return state;
        default:
            return state;
    }
}

export default user;
import * as types from '../actions/actionTypes';

const initialState = {}

const admin = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return Object.assign({}, state, {
                users: action.users
            });
        case types.DELETE_USER:
            return Object.assign({}, state, {
                users: state.users.filter(user => user.id !== action.id)
            });
        default:
            return state;
    }
}

export default admin;

import axios from 'axios';
import * as types from './actionTypes';
const API = process.env.REACT_APP_API;

export const getUsers = (dispatch) => {

    axios.get(API + '/users')
        .then(response => {
            dispatch({
                type: types.GET_USERS,
                users: response.data
            });
        })
        .catch(error => {
            console.log(error);
        });

}

export const deleteUser = (dispatch, id) => {

    axios.delete(API + '/users/' + id)
        .then(response => {

            if (response.status === 200) {
                dispatch({
                    type: types.DELETE_USER,
                    id: id
                });
            } else {
                console.log('Could not delete user');
            }

        })
        .catch(error => {
            console.log(error);
        });

}

export const updateUser = (dispatch, user) => {

}

export const expandUser = (dispatch, id) => {
    console.log('Expand user with id ', id);
}
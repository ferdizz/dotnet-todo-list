import axios from 'axios';
import * as types from './actionTypes';

const API = process.env.REACT_APP_API;

export const addTodo = (dispatch, title, userId) => {

    let todo = {
        Title: title,
        UserId: userId
    }

    axios.post(API + '/todos', todo)
        .then(response => {
            dispatch({
                type: types.ADD_TODO,
                todo: response.data
            });
        })
        .catch(error => {
            console.log(error);
        });

}

export const toggleTodo = (dispatch, id) => {
    axios.get(API + '/todos/' + id + '/toggle')
        .then(response => {
            if (response.status === 200) {
                dispatch({
                    type: types.TOGGLE_TODO,
                    id: id
                })
            } else {
                console.log(response);
            }
        })
        .catch(error => {
            console.log(error);
        })
}

export const deleteTodo = (dispatch, id) => {
    axios.delete(API + '/todos/' + id)
        .then(response => {
            if (response.status === 200) {
                dispatch({
                    type: types.DELETE_TODO,
                    id: id
                });
            } else {
                console.log(response);
            }
        })
        .catch(error => {
            console.log(error);
        })
}
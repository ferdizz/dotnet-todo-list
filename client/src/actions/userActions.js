import axios from 'axios';
import * as types from './actionTypes';
import { saveData } from '../misc/storage';
const API = process.env.REACT_APP_API;

export const login = (dispatch, userdata) => {

    axios.post(API + '/users/login', userdata)
        .then(response => {
            if (response.data.id) {
                saveData('user', response.data)
                setUser(dispatch, response.data)
            } else {
                console.log('Login failed')
                console.log(response.data)
            }
        })
        .catch((error) => {
            console.log(error.response)
            setStatus(dispatch, { status: error.response.data })
        })

}

export const createUser = (dispatch, userdata) => {

    axios.post(API + '/users', userdata)
        .then(response => {
            if (response.data.id) {
                saveData('user', response.data)
                setUser(dispatch, response.data)
            } else {
                console.log('Login failed')
                console.log(response.data)
            }
        })
        .catch((error) => {
            console.log(error.response)
            setStatus(dispatch, { status: error.response.data })
        })
}

export const logout = (dispatch) => {
    localStorage.clear();
    dispatch({
        type: types.LOG_OUT
    });
}

export const setStatus = (dispatch, status) => {
    dispatch({
        type: types.SET_STATUS,
        status: status
    });
}

export const setUser = (dispatch, userdata) => {
    dispatch({
        type: types.LOG_IN,
        user: userdata
    });
}
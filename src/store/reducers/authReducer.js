import *  as actionTypes from '../actions/actionTypes';

const initialState = {
    token: '',
    username: '',
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default authReducer;
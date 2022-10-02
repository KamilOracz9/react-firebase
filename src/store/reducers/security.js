import * as constants from '../constants/security';

const initialState = {
    token: '',
};

const securityReducer = (state = initialState, action) => {
    switch(action.type){
        case constants.SIGN_IN: return {...state};
        case constants.SIGN_OUT: return {...state};
        case constants.SET_TOKEN: return {...state, token: action.payload};
        default: return state;
    }
}

export default securityReducer;
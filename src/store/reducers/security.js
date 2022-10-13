import * as constants from '../constants/security';

const initialState = {
    token: '',
};

const securityReducer = (state = initialState, action) => {
    switch(action.type){
        case constants.SIGN_IN: return {...state};
        case constants.SIGN_OUT: return {...state};
        case constants.SIGN_UP: return {...state};
        default: return state;
    }
}

export default securityReducer;
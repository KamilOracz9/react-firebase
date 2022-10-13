import * as constants from "../constants/ui";

const initialState = {
    loading: false,
    activeMenu: 'dashboard',
};

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.ENABLE_LOADING:
            return {
                ...state,
                loading: true
            };
        case constants.DISABLE_LOADING:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}

export default uiReducer;
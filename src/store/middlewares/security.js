import * as constants from '../constants/security';
import * as uiActions from '../actions/ui';
import * as actions from '../actions/security';

const signInFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if(action.type === constants.SIGN_IN){
        try{
            dispatch(uiActions.enableLoading);
            dispatch(actions.setToken('token'));
        }catch(error){

        }finally{
            dispatch(uiActions.disableLoading);
        }
    }
}

export default [
    signInFlow
];
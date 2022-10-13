import * as constants from '../constants/security';
import * as uiActions from '../actions/ui';

const signInFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if(action.type === constants.SIGN_IN){
        try{
            dispatch(uiActions.enableLoading);
            await api.security.signIn(action.payload);
        }catch(error){

        }finally{
            dispatch(uiActions.disableLoading);
        }
    }
}

const signOutFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if(action.type === constants.SIGN_OUT){
        try{
            dispatch(uiActions.enableLoading);
            api.security.signOut();
        }catch(error){

        }finally{
            dispatch(uiActions.disableLoading);
        }
    }
}

const signUpFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if(action.type === constants.SIGN_UP){
        try{
            dispatch(uiActions.enableLoading);
            api.security.signUp(action.payload);
        }catch(error){

        }finally{
            dispatch(uiActions.disableLoading);
        }
    }
}

export default [
    signInFlow,
    signOutFlow,
    signUpFlow
];
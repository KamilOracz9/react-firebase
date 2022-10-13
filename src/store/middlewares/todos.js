import * as constants from '../constants/todos';
import * as uiActions from '../actions/ui';

const loadAllTodosFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if(action.type === constants.LOAD_ALL_TODOS){
        try{
            dispatch(uiActions.enableLoading);
            api.todos.loadAllTodos().then(response => {
                dispatch({type: constants.SET_TODOS, payload: response});
            });
        }catch(error){

        }finally{
            dispatch(uiActions.disableLoading);
        }
    }
}

export default [
    loadAllTodosFlow,
];
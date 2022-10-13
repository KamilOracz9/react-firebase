import * as constants from '../constants/todos';

const initialState = {
    allTodos: [],
}

const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case constants.LOAD_ALL_TODOS: return {...state};
        case constants.SET_TODOS: return {...state, allTodos: action.payload}
        default: return state;
    }
}

export default todosReducer;
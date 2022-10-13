import * as constants from '../constants/todos';

export const loadAllTodos = {type: constants.LOAD_ALL_TODOS};
export const setTodos = todos => ({type: constants.SET_TODOS, payload: todos});
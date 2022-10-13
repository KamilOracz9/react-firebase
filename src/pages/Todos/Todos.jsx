import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../../components';
import { LOAD_ALL_TODOS } from '../../store/constants/todos';
import {allTodos} from '../../store/selectors/todos';
import {Loading} from '../index';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(allTodos);

  useEffect(() => {
    dispatch({type: LOAD_ALL_TODOS});
  }, []);

  return (
    todos.length ? <Table data={todos} /> : <></>
  )
}

export default Todos;

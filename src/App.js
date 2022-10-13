import './App.css';
import { useSelector } from 'react-redux';
import {isLoading} from './store/selectors/ui';
import {Loading} from './pages';
import {Admin, NotLoggedIn} from './layouts';
import React from 'react';

function App() {
  const loading = useSelector(isLoading);

  if(loading) return <Loading />;

  if(!localStorage.getItem('token')){
    return <NotLoggedIn />;
  }else{
    return <Admin />;
  }
}

export default App;

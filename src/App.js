import './App.css';
import { useSelector } from 'react-redux';
import {getToken} from './store/selectors/security';
import {isLoading} from './store/selectors/ui';
import {Loading, Login, Register} from './pages';
import {Admin} from './layouts';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from 'react';

function App() {
  const loading = useSelector(isLoading);
  const token = useSelector(getToken);

  if(loading) return <Loading />;

  if(!token){
    return <NotLoggedInNavigation />;
  }else{
    return <AdminNavigation />;
  }
}

const AdminNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/admin" />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

const NotLoggedInNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

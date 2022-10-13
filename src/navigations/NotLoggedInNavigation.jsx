import React from 'react'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Login, Register } from '../pages';

const NotLoggedInNavigation = () => (
  <Routes>
    <Route path="*" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default NotLoggedInNavigation;
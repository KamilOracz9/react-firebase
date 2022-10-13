import React from 'react'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Dashboard, Todos } from '../pages';

const AdminNavigation = () => (
  <Routes>
    <Route path="*" element={<Navigate to="/admin" />} />
    <Route path="/admin" element={<Dashboard />} />
    <Route path="/admin/todos" element={<Todos />} />
  </Routes>
)

export default AdminNavigation;

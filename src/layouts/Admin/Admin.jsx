import React, { useMemo } from 'react'
import {Navbar, Sidebar, Footer} from '../../components';
import Dashboard from '../../pages/Dashboard/Dashboard';

const Admin = () => {
  const renderSidebar = useMemo(() => {
    return <Sidebar />;
  }, []);

  const renderNavbar = useMemo(() => {
    return <Navbar />;
  }, []);

  return (
    <div className="container-fluid position-relative d-flex p-0">
        {renderSidebar}
        <div className='content'>
          {renderNavbar}
          <Dashboard />
          <Footer />
        </div>
    </div>
  )
}

export default Admin;
import React, { useMemo } from 'react'
import {Navbar, Sidebar, Footer} from '../../components';
import { BrowserRouter } from 'react-router-dom';
import { AdminNavigation } from '../../navigations';


const Admin = () => {
  const renderSidebar = useMemo(() => {
    return <Sidebar />;
  }, []);

  const renderNavbar = useMemo(() => {
    return <Navbar />;
  }, []);

  return (
    <div className="container-fluid position-relative d-flex p-0">
        <BrowserRouter>
        {renderSidebar}
          <div className='content' style={{ display:'flex', flexDirection: 'column' }}>
            {renderNavbar}
            <div class="container-fluid position-relative d-flex p-4" style={{ flex: 1 }}>
              <AdminNavigation />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
    </div>
  )
}

export default Admin;
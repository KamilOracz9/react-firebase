import React from 'react'
import userImg from '../../assets/img/user.jpg';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../hooks';

const Sidebar = () => {
    const [active, setActive] = useLocalStorage('active', 'dashboard');

    const menus = [
        {
            url: '/',
            slug: 'dashboard',
            title: 'Dashboard',
        },
        {
            url: '/admin/todos',
            slug: 'todos',
            title: 'Todos',
        }
    ];
    
    return (
    <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-secondary navbar-dark">
            <Link onClick={() => setActive('dashboard')} to="/" className="navbar-brand mx-4 mb-3">
                <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>DarkPan</h3>
            </Link>
            <div className="d-flex align-items-center ms-4 mb-4">
                <div className="position-relative">
                    <img className="rounded-circle" src={userImg} alt="" style={{width: '40px', height: '40px'}} />
                    <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                </div>
                <div className="ms-3">
                    <h6 className="mb-0">Jhon Doe</h6>
                    <span>Admin</span>
                </div>
            </div>
            <div className="navbar-nav w-100">
                {menus.map((menu, index) => (
                    <Link onClick={() => setActive(menu.slug)} key={index} to={menu.url} className={`nav-item nav-link ${active === menu.slug ? 'active' : ''}`}><i className="fa fa-tachometer-alt me-2"></i>{menu.title}</Link>
                ))}
            </div>
        </nav>
    </div>
  )
}

export default Sidebar;
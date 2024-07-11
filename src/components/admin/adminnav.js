import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './adminnav.css';
import Home from './home/home';
import Client from './client/client';

function AdminNav() {
    const [activeRoute, setActiveRoute] = useState('');

    const handleLinkClick = (path) => {
        setActiveRoute(path);
    };

    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <Link to="/admin/home" onClick={() => handleLinkClick('/admin/home')}>Home</Link>
                    <Link to="/admin/client" onClick={() => handleLinkClick('/admin/client')}>Client</Link>
                </nav>
            </header>
            {activeRoute === '/admin/home' && <Home />}
            {activeRoute === '/admin/client' && <Client />}
        </div>
    );
}

export default AdminNav;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './adminnav.css';
import Home from './home/home';
import AddClient from './addclient/addclient';
import ClientsList from './clientslist/clientslist';
import AddTrainer from './addtrainer/addtrainer';
import TrainersList from './trainerslist/trainerslist';
import Report from './report/report';

import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function AdminNav() {
    const [activeRoute, setActiveRoute] = useState('/admin/home');
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        setActiveRoute(path);
    };

    const handleLogOut = async () => {
        try {
            await auth.signOut();
            navigate('/login');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <nav>
                    <Link to="/admin/home" onClick={() => handleLinkClick('/admin/home')}>Home</Link>
                    <Link to="/admin/addclient" onClick={() => handleLinkClick('/admin/addclient')}>Add Client</Link>
                    <Link to="/admin/clientslist" onClick={() => handleLinkClick('/admin/clientslist')}>Clients List</Link>
                    <Link to="/admin/addtrainer" onClick={() => handleLinkClick('/admin/addtrainer')}>Add Trainer</Link>
                    <Link to="/admin/trainerslist" onClick={() => handleLinkClick('/admin/trainerslist')}>Trainers List</Link>
                    <Link to="/admin/report" onClick={() => handleLinkClick('/admin/report')}>Report</Link>
                    <Link onClick={() => handleLogOut()}>Log Out</Link>
                </nav>
            </header>
            <div className='app-content'>
                {activeRoute === '/admin/home' && <Home />}
                {activeRoute === '/admin/addclient' && <AddClient />}
                {activeRoute === '/admin/clientslist' && <ClientsList />}
                {activeRoute === '/admin/addtrainer' && <AddTrainer />}
                {activeRoute === '/admin/trainerslist' && <TrainersList />}
                {activeRoute === '/admin/report' && <Report />}
            </div>
        </div>
    );
}

export default AdminNav;
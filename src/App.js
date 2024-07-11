import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/admin/home/home';
import AddClient from './components/admin/addclient/addclient';
import ClientsList from './components/admin/clientslist/clientslist';
import AddTrainer from './components/admin/addtrainer/addtrainer';
import TrainersList from './components/admin/trainerslist/trainerslist';
import Report from './components/admin/report/report';

import Login from './components/login/login';
import AdminNav from './components/admin/adminnav'
import { auth } from './firebase';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={currentUser?.['uid'] ? <AdminNav /> : <Login />} />
        <Route path="/admin/*" element={<AdminNav />}>
          <Route path="admin/home" element={<Home />} />
          <Route path="admin/addclient" element={<AddClient />} />
          <Route path="admin/clientslist" element={<ClientsList />} />
          <Route path="admin/addtrainer" element={<AddTrainer />} />
          <Route path="admin/trainerslist" element={<TrainersList />} />
          <Route path="admin/report" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/admin/home/home';
import Client from './components/admin/client/client';
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
          <Route path="admin/client" element={<Client />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



// React Imports
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
// Custom Imports
import Login from './views/Login';
import Home from './views/Home';
import PageNotFound from './views/Pages/PageNotFound';
import { fetchUser } from './utils/fetchUser';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate('/login');
  }, []);

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
      {/* 404 Page */}
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default App;

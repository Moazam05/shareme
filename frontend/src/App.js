// React Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Custom Imports
import Login from './views/Login';
import Home from './views/Home';
import PageNotFound from './views/Pages/PageNotFound';

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Home />} />
      {/* 404 Page */}
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default App;

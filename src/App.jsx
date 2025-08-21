import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

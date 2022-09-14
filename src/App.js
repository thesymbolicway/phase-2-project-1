import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getAuthToken } from './services/spotify';
import PlaylistPage from './pages/playlistPage';
import PlaylistDetailPage from './pages/playlistDetailPage';
import PersonalPlaylistPage from './pages/personalPlaylistPage'
import PersonalPlaylistDetailPage from './pages/personalPlaylistDetailPage';


function App() {

  return (
    <Routes>
      <Route path='/' element={
        <PlaylistPage />} />
      <Route path='/:playlistId' element={<PlaylistDetailPage />} />
      <Route path='/me' element={<PersonalPlaylistPage />} />
      <Route path='/me/:id' element={<PersonalPlaylistDetailPage />} />
    </Routes>
  );
}

export default App;

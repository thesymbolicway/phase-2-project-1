import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaylistPage from './pages/playlistPage';
import PlaylistDetailPage from './pages/playlistDetailPage';
import PersonalPlaylistPage from './pages/personalPlaylistPage'
import PersonalPlaylistDetailPage from './pages/personalPlaylistDetailPage';
import Header from './components/Header'


function App() {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState('')

  return (
    <>
      <nav>
        {/* <p className='mr-10'>test navbar</p>
        <button className='mr-10' onClick={() => navigate('me')}>Me</button>
        <button onClick={() => navigate('/')}>Explore</button> */}
      </nav>
      <Header />
      <Routes>
        <Route path='/' element={
          <PlaylistPage 
            selectedGenre={selectedGenre} 
            setSelectedGenre={setSelectedGenre}
          />
        } />
        <Route path='/:playlistId' element={<PlaylistDetailPage />} />
        <Route path='/me' element={<PersonalPlaylistPage />} />
        <Route path='/me/:playlistId' element={<PersonalPlaylistDetailPage />} />
      </Routes>
    </>
  );
}

export default App;

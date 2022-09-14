import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PlaylistPage from './pages/playlistPage';
import PlaylistDetailPage from './pages/playlistDetailPage';
import PersonalPlaylistPage from './pages/personalPlaylistPage'
import PersonalPlaylistDetailPage from './pages/personalPlaylistDetailPage';

import DropDown from './components/dropdown';
import TrackList from './components/trackList';
import { getAuthToken, getGenres, getPlaylists, getPlaylistData } from './services/spotify'


function App() {
  
  const [token, setToken] = useState('');
  
  const [selectedGenre, setSelectedGenre] = useState('')
  const [listOfGenres, setListOfGenres] = useState([])
  
  const [selectedPlaylist, setSelectedPlaylist] = useState('')
  const [listOfPlaylists, setListOfPlaylists] = useState([])

  const [selectedTrack, setSelectedTrack] = useState('')
  const [listOfTracks, setListOfTracks] = useState([])
  

  useEffect(() => {
    getAuthToken().then(token => {
      setToken(token)
      getGenres(token).then(setListOfGenres)
    })
  }, []);


  function onGenreChange(genre) {
    setSelectedGenre(genre)
    getPlaylists(genre, token).then(setListOfPlaylists)
  }

  function onPlaylistChange(playlist) {
    setSelectedPlaylist(playlist)
  }

  function handleSubmit(e) {
    e.preventDefault();
    getPlaylistData(selectedPlaylist, token).then(setListOfTracks)
  }

  
  return (
    <Routes>
      <Route path='/' element={<PlaylistPage />} />
      <Route path='/:playlistId' element={<PlaylistDetailPage />} />
      <Route path='/me' element={<PersonalPlaylistPage />} />
      <Route path='/me/:id' element={<PersonalPlaylistDetailPage />} />
    </Routes>

  );
}

export default App;

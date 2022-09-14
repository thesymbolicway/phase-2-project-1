import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import DropDown from './components/dropdown';
import { clientId, clientSecret, getSpotifyAPIToken, getSpotifyCategoriesAPI } from './env/spotify'
import TrackList from './components/trackList';


function App() {
  
  const [token, setToken] = useState('');
  
  const [selectedGenre, setSelectedGenre] = useState('')
  const [listOfGenres, setListOfGenres] = useState([])
  
  const [selectedPlaylist, setSelectedPlaylist] = useState('')
  const [listOfPlaylists, setListOfPlaylists] = useState([])

  const [selectedTrack, setSelectedTrack] = useState('')
  const [listOfTracks, setListOfTracks] = useState([])
  

  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      setToken(tokenResponse.data.access_token);

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {      
        console.log('genre response: ', genreResponse);  
        setSelectedGenre(selectedGenre)
        setListOfGenres(genreResponse.data.categories.items)
      });
      
    });

  }, []);


  function onGenreChange(genre) {
    console.log(genre.target.value);
    setSelectedGenre(genre.target.value)

    axios(`https://api.spotify.com/v1/browse/categories/${genre.target.value}/playlists?limit=20`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
    })
    .then(response => {
      setListOfPlaylists(response.data.playlists.items)
    })
  }

  function onPlaylistChange(playlist) {
    setSelectedPlaylist(playlist.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${selectedPlaylist}/tracks?limit=40`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(response => {
      console.log('songs', response.data);
      setListOfTracks(response.data.items)
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="App">
        <h1>Hello</h1>
        <DropDown
          options={listOfGenres}
          raiseChange={onGenreChange}
        />
        <DropDown
          options={listOfPlaylists}
          raiseChange={onPlaylistChange}
        />
        <button type='submit'>Search</button>

        <TrackList 
          data={listOfTracks}
        />
      </div>
    </form>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { getAuthToken, getGenres, getPlaylists, getPlaylistData } from '../services/spotify'
import DropDown from '../components/dropdown';
import playlistList from '../components/playlistList';


function PlaylistPage() {

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
        <div>
            <h1>Playlist Page</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="App">
                    <h1>Hello</h1>
                    <DropDown
                    options={listOfGenres}
                    raiseChange={onGenreChange}
                    />
                    <button type='submit'>Search</button>

                    <playlistList 
                        data={listOfPlaylists}
                    />
                </div>
            </form>
        </div>
    );
}

export default PlaylistPage;
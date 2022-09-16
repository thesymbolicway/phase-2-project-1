import React, { useState, useEffect } from 'react';
import { getAuthToken, getGenres, getPlaylists, getPlaylistData } from '../services/spotify'
import DropDown from '../components/dropdown';
import PlayListDetail from '../components/playlistList';
import PlaylistFeed from '../components/playlistFeed';


function PlaylistPage({selectedGenre, setSelectedGenre}) {

    const [token, setToken] = useState('');
    const [listOfGenres, setListOfGenres] = useState([])
    const [listOfPlaylists, setListOfPlaylists] = useState([])

    useEffect(() => {
        getAuthToken().then(token => {
            setToken(token)
            getGenres(token).then(setListOfGenres)
            getPlaylists(selectedGenre, token).then(setListOfPlaylists)
        })
    }, []);


    function onGenreChange(genre) {
        setSelectedGenre(genre)
        getPlaylists(genre, token).then(setListOfPlaylists)
    }


    return (
        <div className='playlist-page'>
            <div className='playlist-page-card'>
                <h1 className='mb-20'>Search For Playlist</h1>
                <DropDown
                options={listOfGenres}
                raiseChange={onGenreChange}
                value={selectedGenre}
                />

            </div>

            <PlaylistFeed 
                data={listOfPlaylists} 
                personalPlaylist={false}
            />
        </div>
    );
}

export default PlaylistPage;
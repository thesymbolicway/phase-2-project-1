import React, { useState, useEffect } from 'react';
import { getAuthToken, getGenres, getPlaylists, getPlaylistData } from '../services/spotify'
import DropDown from '../components/dropdown';
import PlayListDetail from '../components/playlistList';


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
        <div>
            <h1>Playlist Page</h1>
            
            <form>
                <div className="App">
                    <DropDown
                    options={listOfGenres}
                    raiseChange={onGenreChange}
                    value={selectedGenre}
                    />

                    <PlayListDetail 
                        data={listOfPlaylists}
                    />
                </div>
            </form>
        </div>
    );
}

export default PlaylistPage;
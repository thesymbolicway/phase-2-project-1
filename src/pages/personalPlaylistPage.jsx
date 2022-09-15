import React, { useState, useEffect } from 'react';
import PlaylistForm from "../components/playlistForm";
import PersonalPlaylistCard from '../components/personalPlaylistCard';
import { getUserData, createNewPlaylist, getPlaylists } from '../services/backend'

function PersonalPlaylistPage() {
    const [userData, setUserData] = useState({})
    const [userPlaylists, setUserPlaylists] = useState([])

    useEffect(() => {
        getUserData().then(setUserData)
        getPlaylists().then(setUserPlaylists)
    }, [])
    
    console.log(userPlaylists);

    function handleSubmit(e) {
        e.preventDefault()

        const newPlaylist = {
            name: e.target.playlistName.value,
            description: e.target.playlistDescription.value,
            image: e.target.playlistImage.value,
            followers: 0, 
            tracks: []
        }

        createNewPlaylist(newPlaylist).then(res => setUserPlaylists(data => [...data, res]))

    }



    return (
        <div className="container">
            <PlaylistForm
                raiseSubmit={handleSubmit}
            />

            <h1 className='mx-10'>Welcome Back, {userData.name}!</h1>

            {
                userPlaylists.map(playlist => <PersonalPlaylistCard data={playlist} key={playlist.id}/>)
            }

        </div>
    );
}

export default PersonalPlaylistPage;
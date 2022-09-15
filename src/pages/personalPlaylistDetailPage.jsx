import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getPlaylist, deletePlaylist, updatePlaylist } from '../services/backend';
import PlaylistForm from '../components/playlistForm';

function PersonalPlaylistDetailPage() {
    const { playlistId } = useParams();
    const navigate = useNavigate();

    const [playlistData, setPlaylistData] = useState({})

    useEffect(() => {
        getPlaylist(playlistId).then(setPlaylistData)
    }, [])

    function onDelete() {
        deletePlaylist(playlistId).then(navigate('/me'))
    }

    function handleUpdate(e) {
        e.preventDefault()

        const newPlaylist = {
            name: e.target.playlistName.value,
            description: e.target.playlistDescription.value,
            image: e.target.playlistImage.value,
            followers: 0, 
            tracks: []
        }

        updatePlaylist(playlistId, newPlaylist)
    }


    return (
        <div className='container'>
            <h1>{playlistData.name}</h1>
            <p>{playlistData.description}</p>
            <button onClick={onDelete} className='btn btn-danger'>Delete</button>
            <PlaylistForm
            raiseSubmit={handleUpdate}
            />

        </div>
    );
}

export default PersonalPlaylistDetailPage;
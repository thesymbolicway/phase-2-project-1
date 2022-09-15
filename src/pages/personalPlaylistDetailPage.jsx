import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getPlaylist, deletePlaylist, updatePlaylist, removeTrackfromPlaylist } from '../services/backend';
import { getMultipleTracks } from '../services/spotify';
import PlaylistForm from '../components/playlistForm';
import PlaylistHeader from '../components/playlistHeader';
import PersonalTrackListDetails from '../components/personalTrackList';


function PersonalPlaylistDetailPage() {
    const { playlistId } = useParams();

    const [playlistData, setPlaylistData] = useState({})
    const [playlistTracks, setPlaylistTracks] = useState([])

    useEffect(() => {
        getPlaylist(playlistId).then(res => {
            setPlaylistData(res)
            getMultipleTracks(res.tracks).then(setPlaylistTracks)
        })

    }, [])

    function onDeletePlaylist() {
        deletePlaylist(playlistId).then(() => {window.location.href = "/me"})
    }

    async function handleDeleteTrack(trackId) {
        await removeTrackfromPlaylist(playlistId, trackId)
        setPlaylistTracks(tracks => tracks.filter(track => track.id !== trackId))
    }

    console.log(playlistTracks);

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
            <PlaylistHeader
                title={playlistData.name}
                description={playlistData.description}
                thumbnail = {playlistData.image}
                followers={playlistData.followers}
                personalPlaylist={true}
            />

            <button onClick={onDeletePlaylist} className='btn btn-danger'>Delete</button>
            
            {/* <PlaylistForm
                raiseSubmit={handleUpdate}
            /> */}

            <PersonalTrackListDetails
                data={playlistTracks}
                onDeleteTrack={handleDeleteTrack}
            />

        </div>
    );
}

export default PersonalPlaylistDetailPage;
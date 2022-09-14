import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getAuthToken, getPlaylistData } from '../services/spotify'
import TrackListDetails from '../components/trackListDetails';

function PlaylistDetailPage() {
    const { playlistId } = useParams();

    const [tracks, setTracks] = useState([])

    useEffect(() => {
        getAuthToken().then(token => {
            getPlaylistData(playlistId, token).then(setTracks)
        })
    }, [])
    
    console.log(tracks);
    return (
        <div>
            <h1>Playlist Detail Page</h1>
            <TrackListDetails
                data={tracks}
            />

        </div>
    );
}

export default PlaylistDetailPage;
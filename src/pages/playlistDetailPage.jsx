import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getAuthToken, getPlaylistData } from '../services/spotify'
import TrackListDetails from '../components/trackListDetails';


function PlaylistDetailPage() {
    const { playlistId } = useParams();

    const [playlistData, setPlaylistData] = useState({
        name: "", image: "", description: "", followers: 0, tracks: []
    })


    useEffect(() => {
        getAuthToken().then(token => {
            getPlaylistData(playlistId, token).then(response => {
                console.log('response data', response);
                setPlaylistData({
                    name: response.name,
                    image: response.images[0].url,
                    description: response.description,
                    followers: response.followers.total,
                    tracks: response.tracks.items

                })
            })
        })
    }, [])
    
    return (
        <div className='container'>
            <h1>{playlistData.name}</h1>
            <TrackListDetails
                data={playlistData.tracks}
            />

        </div>
    );
}

export default PlaylistDetailPage;
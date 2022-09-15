import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getAuthToken, getPlaylistData } from '../services/spotify'
import TrackListDetails from '../components/trackListDetails';
import PlaylistHeader from '../components/playlistHeader';


function PlaylistDetailPage() {
    const { playlistId } = useParams();

    const [playlistData, setPlaylistData] = useState({
        name: "", 
        image: "", 
        description: "", 
        followers: 0, 
        tracks: []
    })


    useEffect(() => {
        getAuthToken().then(token => {
            getPlaylistData(playlistId, token).then(response => {
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
            
            <PlaylistHeader
                title={playlistData.name}
                description={playlistData.description}
                thumbnail = {playlistData.image}
                followers={playlistData.followers}
                personalPlaylist={false}
            />
            
            <TrackListDetails
                data={playlistData.tracks}
            />

        </div>
    );
}

export default PlaylistDetailPage;
import React from 'react';
import { useNavigate } from "react-router-dom";
import PlaylistCard from './playlistCard';

function PlayListDetail({data}) {
    console.log(data)
    let navigate = useNavigate();

    function handleClick(playlistId) {
        navigate(`/${playlistId}`);
    }

    return (
        < >
            {data.map(playlist => <PlaylistCard playlist={playlist} raiseClick={handleClick}/>)}
        </>
    );
}

export default PlayListDetail;
import React from 'react';
import { useNavigate } from "react-router-dom";

function PlayListDetail({data}) {
    let navigate = useNavigate();

    function handleClick(playlistId) {
        navigate(`/${playlistId}`);
    }

    return (
        <ul>
            {data.map(playlist => <li key={playlist.id} onClick={() => handleClick(playlist.id)} >{playlist.name}</li>)}
        </ul>
    );
}

export default PlayListDetail;
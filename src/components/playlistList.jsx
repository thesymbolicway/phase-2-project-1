import React from 'react';
import { useNavigate } from "react-router-dom";

function PlayListDetail({data}) {
    let navigate = useNavigate();

    function handleClick(playlistId) {
        navigate(`/${playlistId}`);
    }

    return (
        < >
            {data.map(playlist => 
            <div className='card'>
                <h2 key={playlist.id} onClick={() => handleClick(playlist.id)} >{playlist.name}</h2>
            </div>)}
        </>
    );
}

export default PlayListDetail;
import React from 'react';

function TrackList({data}) {
    return (
        <ul>
            {data.map(track => <li>{track.track.name}</li>)}
        </ul>
    );
}

export default TrackList;
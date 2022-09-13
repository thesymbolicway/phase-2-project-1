import React from 'react';

function TrackList({data}) {

    console.log(data[0]);
    return (
        <ul>
            {data.map(track => <li>{track.track.name}</li>)}
        </ul>
    );
}

export default TrackList;
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { getPlaylists, addTrackToPlaylist } from '../services/backend';

function TrackListDetails({data}) {

    const [userPlaylists, setUserPlaylists] = useState([])

    useEffect(() => {
        getPlaylists().then(setUserPlaylists)
    }, [])
    
    console.log(userPlaylists);
    
    function renderArtist(artistArr) {
        if(artistArr.length === 1) {
            return artistArr[0].name
        }
        if(artistArr.length === 0) {
            return 'Unkown Artist'
        }
        // let returnValue = []; 
        // for(let i = 0; i <= artistArr.length; i++) {
        //     returnValue.push(artistArr[i].name)
        // }

        // console.log(returnValue);
        
        return artistArr[0].name
    }

    function renderDuration(duration) {
        var minutes = Math.floor(duration / 60000);
        var seconds = ((duration % 6000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
    }

    function renderAlbum(album) {
        return album
    }

    function onAddToPlaylist(playlistId, trackId) {
        addTrackToPlaylist(playlistId, trackId)
    }

    function renderDropdown(trackId) {
        return (
            <DropdownButton onSelect={playlistId => onAddToPlaylist(playlistId, trackId)} id="addToPlaylist" title="Add me to a playlist">
                {
                    userPlaylists.map(playlist => <Dropdown.Item eventKey={playlist.id} >{playlist.name}</Dropdown.Item>)
                }
            </DropdownButton>
        )
    }

    return (
        <div>
            <Table hover size="sm" >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Duration</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(track => {
                            console.log(track.track);
                            return (
                            <tr>
                                <td>{track.track.name}</td>
                                <td>{renderArtist(track.track.artists)}</td>
                                <td>{renderAlbum(track.track.album.name)}</td>
                                <td>{renderDuration(track.track.duration_ms)}</td>
                                <td>{renderDropdown(track.track.id)}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default TrackListDetails;
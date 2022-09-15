import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function PersonalTrackListDetails({data, onDeleteTrack}) {
    
    function renderArtist(artistArr) {
        if(artistArr.length === 1) {
            return artistArr[0].name
        }
        if(artistArr.length === 0) {
            return 'Unkown Artist'
        }
    }
    
    function renderDuration(duration) {
        return duration
    }
    
    function renderAlbum(album) {
        return album
    }
    

    function renderDeleteButton(trackId) {
        return (
            <Button onClick={() => onDeleteTrack(trackId)} variant="danger">Delete</Button>
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
                            return (
                            <tr>
                                <td>{track.name}</td>
                                <td>{renderArtist(track.artists)}</td>
                                <td>{renderAlbum(track.album.name)}</td>
                                <td>{renderDuration(track.duration_ms)}</td>
                                <td>{renderDeleteButton(track.id)}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default PersonalTrackListDetails;
import { Table } from 'react-bootstrap';

function TrackListDetails({data}) {
    // track title, artist, album, duration, is favorited 

    function renderArtist(artistArr) {
        return artistArr[0].name
    }

    function renderDuration(duration) {
        return duration
    }

    function renderAlbum(album) {
        return album
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
                                <td>{track.track.name}</td>
                                <td>{renderArtist(track.track.artists)}</td>
                                <td>{renderAlbum(track.track.album.name)}</td>
                                <td>{renderDuration(track.track.duration_ms)}</td>
                                <td><button className='btn btn-primary'>like</button></td>
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
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PlaylistForm({raiseSubmit}) {
    return (
        <div className='form-container'>
            <Form onSubmit={raiseSubmit}>
                <Form.Group className="mb-3" controlId="playlistName">
                    <Form.Label>Playlist Name</Form.Label>
                    <Form.Control type="text" placeholder="Create a new playlist!" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="playlistDescription">
                    <Form.Label>Playlist Description</Form.Label>
                    <Form.Control type="text" placeholder="Give me a description!" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="playlistImage">
                    <Form.Label>Playlist Thumbnail</Form.Label>
                    <Form.Control type="text" placeholder="Give me a photo!" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create New Playlist
                </Button>
            </Form>

        </div>
    );
}

export default PlaylistForm;
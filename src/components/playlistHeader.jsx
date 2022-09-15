import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function PlaylistHeader({ title, description, thumbnail, followers }) {
    const navigate = useNavigate();

    return (
        <div className="mb-40">
            <div className='mb-40'>
                <Button onClick={() => navigate(-1)} variant="secondary">Back</Button>
            </div>

            <div className="playlist-header">
                <div className="playlist-header-thumbnail">
                    <img src={thumbnail} alt={description} />
                </div>
                <div className="playlist-header-data">
                    <h1>{title}</h1>
                    <h6>{description}</h6>
                    <p>Followers: {followers}</p>
                </div>
    
            </div>
            <div className="playlist-header-bar"></div>
        </div>

    );
}

export default PlaylistHeader;
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function PersonalPlaylistCard({ data, image, personalPlaylist }) {
    const navigate = useNavigate()

    function getNavigation() {
        if(personalPlaylist) {
            navigate(`/me/${data.id}`)
        } else {
            navigate(`/${data.id}`)
        }
    }

    return (
        <>
        <Card onClick={getNavigation} style={{ width: '18rem' }}>
        <img className='playlist-card-img' src={image} alt="" />
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
        </Card.Body>
        </Card>
        
        </>
    );
}

export default PersonalPlaylistCard;
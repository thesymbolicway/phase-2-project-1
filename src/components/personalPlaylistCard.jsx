import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function PersonalPlaylistCard({ data }) {
    const navigate = useNavigate('')
    return (
        <Card onClick={() => navigate(`/me/${data.id}`)} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PersonalPlaylistCard;
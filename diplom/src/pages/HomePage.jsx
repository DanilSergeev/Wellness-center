import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main className='marginCenter'>
            <Card style={{ width: '38rem' }}>
                <Card.Img variant="top" src="https://kartinkin.net/pics/uploads/posts/2022-08/1660356464_13-kartinkin-net-p-melburn-stolitsa-avstralii-krasivo-foto-13.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Link to="/videoRooms" className='link_a'><Button variant="success">К комноте</Button></Link>
                </Card.Body>
            </Card>
        </main>
    )
}
export default HomePage
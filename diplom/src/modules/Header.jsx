import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png"


const colorTham = "light";


const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg={colorTham} variant={colorTham}>
                <Container>
                    <Navbar.Brand ><Link to="/" className='link_a' ><img src={logo} alt="logo_Wellness center" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/aboutUs" className='link_a' >О нас</Link></Nav.Link>
                            <Nav.Link><Link to="/contacts" className='link_a' >Контакты</Link></Nav.Link>
                            <Nav.Link href="/videoRooms">Видео комнаты </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link><Link to="/login" className='link_a' >Авторизация</Link></Nav.Link>
                            <Nav.Link><Link to="/register" className='link_a' >Регистрация</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header
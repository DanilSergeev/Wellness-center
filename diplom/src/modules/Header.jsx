import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png"
import { logoutAction } from '../store/auth-reduser';
import { useDispatch, useSelector } from "react-redux"
import AuthService from '../services/authService';



const colorTham = "light";

const Header = () => {
    const dispatch = useDispatch()
    const authReduser = useSelector(state => state.authReduser);

    const logoutFun = async () => {
        try {
            const response = await AuthService.logout()
            dispatch(logoutAction(response))
        } catch (error) {
            console.log(error)
        }
    }


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
                            <Nav.Link className='link_a' href="/videoRooms">Видео комнаты </Nav.Link>
                        </Nav>
                        <Nav>

                            {

                                authReduser.isAuth && authReduser.isActivated ?
                                    <>
                                        {
                                            authReduser.role === "ADMIN" ?
                                                <Nav.Link><Link to="/admin" className='link_a' >Админка</Link></Nav.Link>
                                                :
                                                <></>
                                        }
                                        <Nav.Link onClick={() => logoutFun()} className='link_a' href="#">Выйти с {authReduser.email.substr(0, 12)}</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link><Link to="/login" className='link_a' >Авторизация</Link></Nav.Link>
                                        <Nav.Link><Link to="/register" className='link_a' >Регистрация</Link></Nav.Link>

                                    </>


                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header
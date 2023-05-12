import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
                            <Nav.Link as={NavLink} to="/aboutUs" className='link_a'>О нас</Nav.Link>
                            <Nav.Link as={NavLink} to="/contacts" className='link_a' >Контакты</Nav.Link>
                            {
                                authReduser.isAuth && authReduser.isActivated?
                                <Nav.Link as={NavLink} to="/videoRooms" className='link_a' >Видео комнаты</Nav.Link>
                                :
                                <></>
                            }
                        </Nav>
                        <Nav>

                            {

                                authReduser.isAuth && authReduser.isActivated ?
                                    <>
                                        {
                                            authReduser.role === "ADMIN" ?
                                                <Nav.Link as={NavLink} to="/admin" className='link_a'>Админка</Nav.Link>
                                                :
                                                authReduser.role === "DOCTOR" ?
                                                    <Nav.Link as={NavLink} to={`/doctor/${authReduser.id}`} className='link_a' >Личный кабинет</Nav.Link>
                                                    :
                                                    <></>
                                        }
                                        <Nav.Link onClick={() => logoutFun()} className='link_a' href="#">Выйти с {authReduser.email.substr(0, 12)}</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={NavLink}  to="/login" className='link_a'>Авторизация</Nav.Link>
                                        <Nav.Link as={NavLink} to="/register" className='link_a'>Регистрация</Nav.Link>

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
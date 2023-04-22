import Line from "../modules/Line"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png"
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';

import { useDispatch } from "react-redux"
import { setLoginUserAction } from "../store/auth-reduser";
import AuthService from "../services/authService";

const LoginPage = () => {
    const dispatch = useDispatch()
    
    
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [alert, setAlert] = useState({ show: false, text: "", variant: "warning" })


    const sendDataLogin = async () => {
        setAlert(prev => ({ ...prev, show: false }))
        try {
            const response = await AuthService.login(email, password)
            dispatch( setLoginUserAction(response))
        } catch (error) {
            console.log(error)
            if(error?.response?.data?.message !== undefined){
                setAlert(prev => ({ ...prev, show: true, text: `Ошибка - ${error?.response?.data?.message}`, variant: "danger" }))
            }else{
                setAlert(prev => ({ ...prev, show: true, text: `Ошибка - ${error?.message}`, variant: "danger" }))
            }
        }
    }


    return (
        <main >
            <Line title={"AUTHORIZATION"} >
                Добро пожаловать обратно: войдите в свой аккаунт и продолжите получать медицинские консультации
            </Line>
            <section className='wrapper indent-top indent-bot authSection'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            ФОРМА АВТОРИЗАЦИИ
                        </Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите ваш логин:</Form.Label>
                        <Form.Control value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Введите логин" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Введите ваш пароль:</Form.Label>
                        <Form.Control value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Введите пароль" />
                    </Form.Group>

                    <Alert show={alert.show} variant={alert.variant} onClick={() => setAlert(prev => ({...prev, show: false}))}>
                        {alert.text}
                    </Alert>

                    <Button variant="danger" onClick={() => sendDataLogin()}>
                        Отправить
                    </Button>
                </Form>

                <Card className="authCard">
                    <Card.Link className="authCardLinkLogo" as={Link} to="/" ><Card.Img variant="top" src={logo} /></Card.Link>

                    <Card.Body>
                        <Card.Title>Зачем нужна регистрация?</Card.Title>
                        <Card.Text>
                            Авторизация на нашем сайте является неотъемлемой частью нашей системы безопасности и защиты личных данных пациентов. Вы можете быть уверены в конфиденциальности своих медицинских данных и информации о своем здоровье.
                        </Card.Text>
                        <Card.Link as={Link} to="/register" >Зарегистрироватся</Card.Link>
                    </Card.Body>
                </Card>
            </section>
        </main>
    )
}
export default LoginPage
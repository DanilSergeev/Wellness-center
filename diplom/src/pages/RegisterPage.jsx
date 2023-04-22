import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Line from "../modules/Line"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png"
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import AuthService from '../services/authService';
import { useDispatch } from "react-redux"
import { setRegisterUserAction } from '../store/auth-reduser';



const RegisterPage = () => {
    const dispatch = useDispatch()


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()
    const [alert, setAlert] = useState({ show: false, text: "", variant: "warning" })


    const sendDataRegister = async () => {
        setAlert(prev => ({ ...prev, show: false }))
        try {
            if (password !== rePassword) {
                return setAlert(prev => ({ ...prev, show: true, text: `Пароли не совпадают`, variant: "warning" }))
            }
            const response = await AuthService.register(email, password, "USER")
            dispatch(setRegisterUserAction(response))

        } catch (error) {
            console.log(error)
            if (error?.response?.data?.message !== undefined) {
                setAlert(prev => ({ ...prev, show: true, text: `Ошибка - ${error?.response?.data?.message}`, variant: "danger" }))
            } else {
                setAlert(prev => ({ ...prev, show: true, text: `Ошибка - ${error?.message}`, variant: "danger" }))
            }
        }
    }

    return (
        <main >
            <Line title={"REGISTRATION"} >
                Станьте нашим пациентом: зарегистрируйтесь и получите доступ к медицинским услугам
            </Line>
            <section className='wrapper indent-top indent-bot authSection'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            ФОРМА РЕГИСТРАЦИИ
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите ваш логин:</Form.Label>
                        <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Введите логин" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Введите ваш пароль:</Form.Label>
                        <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Введите пароль" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Повторите ваш пароль:</Form.Label>
                        <Form.Control value={rePassword} onChange={e => setRePassword(e.target.value)} type="password" placeholder="Введите пароль" />
                    </Form.Group>


                    <Alert show={alert.show} variant={alert.variant} onClick={() => setAlert(prev => ({ ...prev, show: false }))}>
                        {alert.text}
                    </Alert>

                    <Button variant="danger" onClick={() => sendDataRegister()}>
                        Отправить
                    </Button>
                </Form>

                <Card className="authCard">
                    <Card.Link className="authCardLinkLogo" as={Link} to="/" ><Card.Img variant="top" src={logo} /></Card.Link>

                    <Card.Body>
                        <Card.Title>Зачем нужна регистрация?</Card.Title>
                        <Card.Text>
                            Регистрация на нашем сайте дает вам возможность получать медицинские консультации у наших специалистов, не покидая дома. Вы сможете записываться на приемы, получать рецепты и результаты анализов, управлять своей медицинской историей и многое другое.
                        </Card.Text>
                        <Card.Link as={Link} to="/login" >Авторизоватся</Card.Link>

                    </Card.Body>
                </Card>
            </section>
        </main>
    )
}
export default RegisterPage
import Line from "../modules/Line"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png"


const LoginPage = () => {

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
                        <Form.Control type="email" placeholder="Введите логин" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Введите ваш пароль:</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" />
                    </Form.Group>


                    {/* <Alert variant="success">
                    Сообщение успешно отправлено (добавить кнопку скрытия)
                    </Alert> */}

                    <Button variant="danger" >
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
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Line from "../modules/Line"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png"



const RegisterPage = () => {

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
                        <Form.Control type="email" placeholder="Введите логин" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Введите ваш пароль:</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Повторите ваш пароль:</Form.Label>
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
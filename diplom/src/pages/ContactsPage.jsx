import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Line from '../modules/Line';


const ContactsPage = () => {
    return (
        <main className=" contactsPage" >
            <Line title={"CONTACT US"} >
                Мы всегда готовы ответить на ваши вопросы и предоставить необходимую информацию
            </Line>
            <section className="wrapper indent-top indent-bot-sm">
                <p>
                    Мы всегда готовы ответить на ваши вопросы и предложения.
                    Если у вас есть какие-либо вопросы о наших услугах или вы хотите оставить отзыв,
                    пожалуйста, свяжитесь с нами.
                </p>
                <p>
                    Вы можете связаться с нами по телефону +7 (789) 888-44-11 или отправить
                    электронное письмо на наш адрес info.wellness@healthcare.com.
                    Мы также предоставляем форму обратной связи на нашем сайте,
                    где вы можете оставить свой отзыв или задать вопрос.
                </p>
                <p>
                    Наши медицинские специалисты всегда готовы помочь вам и дать необходимую
                    консультацию. Мы стремимся к высокому уровню обслуживания и готовы выслушать
                    любые ваши пожелания или предложения.
                </p>
                <p >
                    Спасибо, что выбрали нашу компанию. Мы будем рады помочь вам!
                </p>
            </section>
            <section className='bg-color-white indent-top-sm indent-bot'>
                <div className='wrapper'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                ОСТАВИТЬ СООБЩЕНИЕ
                            </Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Введите имя:</Form.Label>
                            <Form.Control type="text" placeholder="Введите имя" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Электронная почта:</Form.Label>
                            <Form.Control type="email" placeholder="Введите вашу электронную почту" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Ваше сообщение:</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Введите сообщение" />
                        </Form.Group>

                        {/* <Alert variant="success">
                    Сообщение успешно отправлено (добавить кнопку скрытия)
                    </Alert> */}

                        <Button variant="danger" >
                            Отправить
                        </Button>
                    </Form>
                </div>
            </section>

        </main>
    )
}
export default ContactsPage
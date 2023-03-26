import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Line from '../modules/Line';
import { useState } from 'react';

const ContactsPage = () => {
    const [name, setName] = useState('')
    const [eamil, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const sendMessageFun = () => {
        // mailServiceInstance.sendMail(name, eamil, message)
    }

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
                    Вы можете связаться с нами по телефону {process.env.REACT_APP_PHONE} или отправить
                    электронное письмо на наш адрес {process.env.REACT_APP_EMAIL.replace(/["]/g, '')}.
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
                            <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Введите имя" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Электронная почта:</Form.Label>
                            <Form.Control value={eamil} onChange={e => setEmail(e.target.value)} type="email" placeholder="Введите вашу электронную почту" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Ваше сообщение:</Form.Label>
                            <Form.Control value={message} onChange={e => setMessage(e.target.value)} as="textarea" rows={3} placeholder="Введите сообщение" />
                        </Form.Group>

                        <Alert variant="success">
                    Сообщение успешно отправлено (добавить кнопку скрытия)
                    </Alert>

                        <Button variant="danger" >
                            Отправить
                        </Button>
                    </Form>
                </div>
            </section>
            <section className='indent-top-sm'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2757623918883!2d37.61769581625167!3d55.753711680553586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5759f5b76b%3A0xde502cd817a1b053!2z0JzQsNCy0LfQvtC70LXQuSDQki7QmC4g0JvQtdC90LjQvdCwINC90LAg0JrRgNCw0YHQvdC-0Lkg0L_Qu9C-0YnQsNC00Lg!5e0!3m2!1sru!2sru!4v1679420783729!5m2!1sru!2sru" width="100%" height="450" loading="lazy" title='map'></iframe>
            </section>
        </main>
    )
}
export default ContactsPage
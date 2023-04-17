import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import imgOne from '../assets/img/1111.jpg'
import imgTwo from '../assets/img/2222.jpg'
import imgThree from '../assets/img/3333.jpg'
import homePageAboutUs from '../assets/img/homePageAboutUs.jpg'
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <main>
            <section className='welcomCarusel'>
                <Carousel className='caruselMain' interval={5000} indicators={false} controls={false}>
                    <Carousel.Item className='caruselItemMe'>
                        <img
                            src={imgOne}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='caruselItemMe'>
                        <img
                            src={imgTwo}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='caruselItemMe'>
                        <img
                            src={imgThree}
                            alt="Third slide"
                        />
                    </Carousel.Item>

                </Carousel>
                <Card className='wrapper cardCarusel'>
                    <Card.Body>
                        <Card.Title onClick={() => test()}>Квалифицированная помощь онлайн</Card.Title>
                        <Card.Text>
                            Добро пожаловать в нашу компанию, которая предоставляет медицинские консультации с помощью видеосвязи. Мы стремимся сделать медицинскую помощь максимально доступной и удобной для каждого пациента.


                        </Card.Text>
                        <a href="/videoRooms" className='link_a'><Button variant="danger">К комноте</Button></a>
                    </Card.Body>
                </Card>
            </section>


            <section className='homePage_ourTeam wrapper indent-top indent-bot-sm'>
                <h2>НАШИ <span className='colorSecond'>СПЕЦИАЛИСТЫ</span></h2>
                <hr className='myHr' />
                <p className='mb-5'>Встречайте команду высококвалифицированных и дружелюбных специалистов, готовых помочь вам с любыми медицинскими вопросами. Наши врачи обладают широким профилем знаний и опытом работы в разных областях медицины, а также готовы консультировать вас удаленно через видеосвязь, чтобы обеспечить максимальный комфорт и удобство.
                </p>

                <Carousel className='homePage_ourTeam_cards' indicators={false} variant="dark" pause="hover" >
                    {
                        [...Array(3)].map((_, j) =>
                            <Carousel.Item>
                                {
                                    [...Array(3)].map((item, index) =>
                                        <Card style={{ width: '20rem' }}>
                                            <Card.Body>
                                                <Card.Img src='https://picsum.photos/200/300'></Card.Img>
                                                <Card.Title className="mt-4">Lorem Ipsum {3 * j + index}</Card.Title>
                                                <Card.Text className='colorSecond'> Должность</Card.Text>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )
                                }
                            </Carousel.Item>
                        )
                    }

                </Carousel>
            </section>
            <section className=' indent-top indent-bot bg-color-white'>
                <div className='homePage_AboutUS wrapper'>
                    <div>
                        <h2>О НАШЕЙ <span className='colorFirst'>КОМПАНИИ</span></h2>
                        <p className='mb-4 mt-4'>Мы - медицинский портал, предоставляющий доступ к высококвалифицированным врачам и услугам
                            здравоохранения через удобную видеосвязь.
                            Наша миссия - сделать здоровье доступным и комфортным для всех.
                        </p>
                        <Link to="/aboutUs" className='link_a' ><Button variant="danger">Подробнее</Button></Link>
                    </div>
                    <div>
                        <img src={homePageAboutUs} alt={homePageAboutUs} />
                    </div>
                </div>
            </section>
        </main>
    )
}
export default HomePage
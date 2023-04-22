import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import imgOne from '../assets/img/1111.jpg'
import imgTwo from '../assets/img/2222.jpg'
import imgThree from '../assets/img/3333.jpg'
import homePageAboutUs from '../assets/img/homePageAboutUs.jpg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getDoctorsAction } from '../store/dictor-reduser';
import DoctorService from '../services/doctorService';

const HomePage = () => {
    const dispatch = useDispatch()
    const dictorReduser = useSelector(state => state.dictorReduser);

    useEffect(() => {
        getDoctors()
    }, [])
    
    const getDoctors = async () =>{
        try {
            const response = await DoctorService.getDoctors()
            dispatch(getDoctorsAction(response))
        } catch (error) {
            console.log(error)
        }
    }

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
                        
                        [...Array(Math.ceil(dictorReduser.doctors.length/3))].map((_, i) =>
                            <Carousel.Item key={i}>
                                {
                                    dictorReduser.doctors.map((item, j) => i === Math.floor(j/3) ?
                                        <Card key={item.id} style={{ width: '20rem' }}>
                                            <Card.Body>
                                                <Card.Img src={`${process.env.REACT_APP_URL}${item.file}`}></Card.Img>
                                                <Card.Title className="mt-4">{item.name}</Card.Title>
                                                <Card.Text className='colorSecond'>{item.position}</Card.Text>
                                                <Card.Text>
                                                    {item.data}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        :
                                        <></>
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
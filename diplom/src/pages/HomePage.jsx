import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import imgOne from '../assets/img/1111.jpg'
import imgTwo from '../assets/img/2222.jpg'
import imgThree from '../assets/img/3333.jpg'

const HomePage = () => {
    return (
        <main>
            <div className='welcomCarusel'>
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
                    {/* <Card.Img variant="top" src="https://kartinkin.net/pics/uploads/posts/2022-08/1660356464_13-kartinkin-net-p-melburn-stolitsa-avstralii-krasivo-foto-13.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Квалифицированная помощь онлайн</Card.Title>
                        <Card.Text>
                        Добро пожаловать в нашу компанию, которая предоставляет медицинские консультации с помощью видеосвязи. Мы стремимся сделать медицинскую помощь максимально доступной и удобной для каждого пациента.


                        </Card.Text>
                        <a href="/videoRooms" className='link_a'><Button variant="success">К комноте</Button></a>
                    </Card.Body>
                </Card>
            </div>


        </main>
    )
}
export default HomePage
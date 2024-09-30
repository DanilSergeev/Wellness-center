import Line from "../modules/Line"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
    return (
        <main >
            <Line title={"Page 404"}>
                Страница не найдена
            </Line>
            <section className='wrapper indent-top indent-bot '> 
                <Card className="authCard" style={{textAlign:"center"}}>
                    <Card.Body>
                        <Card.Title>Страница не найдена</Card.Title>
                        <Card.Text>
                            Вы можете вернуться на главную страницу, используя меню навигации
                        </Card.Text>
                        <Card.Link as={Link} to="/" >Перейти на главную</Card.Link>
                    </Card.Body>
                </Card>
            </section>
        </main>
    )
}
export default NotFoundPage
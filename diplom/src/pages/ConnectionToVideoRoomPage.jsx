import { useEffect, useRef, useState } from "react"
import socket from "../socket"
import ACTIONS from "../socket/actions.js"
import { v4 } from "uuid"
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Line from '../modules/Line';
import { useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ConnectionToVideoRoomPage = () => {
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])
    const rootNode = useRef()
    const authReduser = useSelector(state => state.authReduser);

    const [modalShow, setModalShow] = useState(false)
    const [nameRoom, setNameRoom] = useState("")


    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
            if (rootNode.current) {
                setRooms(rooms)
            }
        })
    }, [])


    return (
        <>
            <main ref={rootNode}>
                <Line title={"VIDEOS ROOMS"} >
                    Сэкономьте время и силы: консультации с врачом из любой точки мира
                </Line>
                <section className="indent-top wrapper connectionToVideoRoomMain">
                    <h2>Видео комнаты</h2>
                    <hr />
                    <ol>
                        {
                            rooms.length ?
                                rooms.map((item, index) =>
                                    <li onClick={()=>console.log(rooms)} key={item}>
                                        {index + 1 + " - "}
                                        {item}
                                        <Button onClick={() => { navigate("/videoRoom/" + item) }} variant="outline-dark">Присоединиться</Button>
                                    </li>
                                )
                                :
                                <p>На данный момент нету доступных комнат.</p>
                        }
                    </ol>
                    <hr />
                    {
                        authReduser.role === "DOCTOR" || "ADMIN" ?

                            <Button onClick={() => setModalShow(true)} variant="danger">Новая комната</Button>
                            :
                            <></>
                    }
                    <Modal show={modalShow} onHide={() => setModalShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Форма создания комнаты</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>Введите название комнаты:</Form.Label>
                                <Form.Control value={nameRoom} onChange={e => setNameRoom(e.target.value)} type="text" placeholder="Введите название комнаты" />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => { navigate("/videoRoom/" + v4()) }} variant="danger">Создать</Button>
                        </Modal.Footer>
                    </Modal>
                </section>
            </main>
        </>
    )
}
export default ConnectionToVideoRoomPage
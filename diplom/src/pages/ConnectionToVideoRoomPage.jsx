import { useEffect, useRef, useState } from "react"
import socket from "../socket"
import ACTIONS from "../socket/actions.js"
import { v4 } from "uuid"
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Line from '../modules/Line';



const ConnectionToVideoRoomPage = () => {
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])
    const rootNode = useRef()


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
                            rooms.map((item, index) =>
                                <li key={item}>
                                    {index + 1 + " - "}
                                    {item}
                                    <Button onClick={() => { navigate("/videoRoom/" + item) }} variant="outline-dark">Присоединиться</Button>
                                </li>
                            )
                        }
                    </ol>
                    <hr />
                    <Button onClick={() => { navigate("/videoRoom/" + v4()) }} variant="dark">Новая комната</Button>
                </section>
            </main>
        </>
    )
}
export default ConnectionToVideoRoomPage
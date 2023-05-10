import { useEffect, useRef, useState } from "react"
import socket from "../socket"
import ACTIONS from "../socket/actions.js"
import { v4 } from "uuid"
import { useNavigate, useLocation  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Line from '../modules/Line';
import { useSelector } from "react-redux";

const ConnectionToVideoRoomPage = () => {
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])
    const rootNode = useRef()
    const authReduser = useSelector(state => state.authReduser);
    const dictorReduser = useSelector(state => state.dictorReduser);
    const location = useLocation();

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
            if (rootNode.current) {
                setRooms(rooms)
            }
        })
    }, [location.pathname])

    const createRoom = () => {
        let roomID = v4()
        navigate("/videoRoom/" + roomID)
    }


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
                                    <li onClick={() => console.log(rooms)} key={item}>
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

                            <Button onClick={() => createRoom()} variant="danger">Новая комната</Button>
                            :
                            <></>
                    }

                </section>
            </main>
        </>
    )
}
export default ConnectionToVideoRoomPage
import { useEffect, useRef, useState } from "react"
import socket from "../socket"
import ACTIONS from "../socket/actions.js"
import { v4 } from "uuid"
import { useNavigate } from 'react-router-dom';

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
        <main ref={rootNode}>
            <h2>Видео комнаты</h2>
            <ul>
                {
                    rooms.map(item =>
                        <li key={item}>
                            {item}
                            <button onClick={() => { navigate("/videoRoom/" + item) }}>JOin</button>
                        </li>
                    )
                }
            </ul>
            <button onClick={() => { navigate("/videoRoom/" + v4()) }}>Новая комната</button>
        </main>
    )
}
export default ConnectionToVideoRoomPage
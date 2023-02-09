import { useEffect, useState } from "react"
import socket from "../socket"
import ACTIONS from "../socket/actions.js"
import { v4 } from "uuid"
import { useNavigate } from 'react-router-dom';

const ConnectionToVideoRoomPage = () => {
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
            setRooms(rooms)
        })
    }, [])

    return (
        <main>
            <h2>Видео комнаты</h2>
            <ul>
                {
                    rooms.map(item =>
                        <li key={item}>
                            {item}
                            <button onClick={()=>{navigate("/videoRoom/"+item)}}>JOin</button>
                        </li>
                    )
                }
            </ul>
            <button onClick={()=>{navigate("/videoRoom/"+v4())}}>Новая комната</button>
        </main>
    )
}
export default ConnectionToVideoRoomPage
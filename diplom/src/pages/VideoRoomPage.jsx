import { useParams } from "react-router"
import useWebRTC, { LOCAL_VIDEO } from "../hooks/useWebRTC"
import { useEffect, useState } from "react"
import socket from "../socket";
import ACTIONS from "../socket/actions";
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom';



function layout(clientNumber = 1) {

    const pairs = Array.from({ length: clientNumber }).reduce((acc, next, index, arr) => {
        if (index % 2 === 0 && clientNumber <= 4) {
            acc.push(arr.slice(index, index + 2))
        }
        if (index % 3 === 0 && clientNumber > 4) {
            acc.push(arr.slice(index, index + 3))
        }
        return acc
    }, [])





    const rowsNumber = pairs.length
    const height = `${100 / rowsNumber}%`

    return pairs.map((row, index, arr) => {
        if (arr.length === 1 && row.length === 1) {
            return [{ width: "100%", height }]
        }
        if (arr.length <= 4) {
            return row.map(() => ({
                width: "50%", height
            }))
        }
        return [{ width: "33%", height }]

    }).flat()
}

const VideoRoomPage = () => {
    const authReduser = useSelector(state => state.authReduser);
    const [time, setTime] = useState('')
    const [text, setTest] = useState('')
    const [massager, setMassager] = useState([])


    const { id: roomID } = useParams()
    const { clients, provideMediaRef } = useWebRTC(roomID)
    const videoLayout = layout(clients.length)


    useEffect(() => {
        socket.on(ACTIONS.SEND_MESSAGE, (data) => {
            setMassager(prev => [...prev, data]);
        });
    }, [])

    const getTimeNow = () => {
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        return hours + ':' + minutes;
    }

    const sendMessageFun = () => {
        setTime(getTimeNow())
        socket.emit(ACTIONS.SEND_MESSAGE, ({ peerID: roomID, text, email: authReduser.email }))
    }

    if (!authReduser.isAuth && !authReduser.isActivated) {
        return <Navigate to="/" replace />;
    }

    return (
        <main className="videoRoomMain">
            <div className="videoWrapper">
                {clients.map((clientID, index) => {
                    return <div key={clientID} style={videoLayout[index]}>
                        <video
                            width='100%'
                            height='100%'
                            ref={instance => {
                                provideMediaRef(clientID, instance);
                            }}
                            autoPlay
                            playsInline
                            muted={clientID === LOCAL_VIDEO}
                        ></video>
                    </div>
                })}
            </div>
            <div className="videoChat">
                <div>
                    Чат
                </div>
                <ul>
                    <li>
                        <p>Добро пожаловать в чат</p>
                    </li>
                    {
                        massager.map((item, index) => (
                            <li key={index}>
                                <h6>{JSON.parse(item.data.email)}</h6>
                                <p>{JSON.parse(item.data.text)}</p>
                                <div>{time}</div>
                            </li>
                        ))
                    }
                </ul>
                <div className="formSendMessage">
                    <input value={text} onChange={e => setTest(e.target.value)} type="text" className="form-control" placeholder="Новое сообщение" />
                    <button onClick={() => sendMessageFun()}><i className='fas fa-location-arrow'></i></button>
                </div>
            </div>
        </main>
    )
}
export default VideoRoomPage
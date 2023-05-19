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
    const [text, setText] = useState('')
    const [massager, setMassager] = useState([])

    const [activChat, setActivChat] = useState(false)


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
        if (text) {
            setTime(getTimeNow())
            socket.emit(ACTIONS.SEND_MESSAGE, ({ peerID: roomID, text, email: authReduser.email }))
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            sendMessageFun()
        }
    };





    if (!authReduser.isAuth && !authReduser.isActivated) {
        return <Navigate to="/" replace />;
    }
    return (
        <main className="videoRoomMain">
            {
                <i onClick={() => setActivChat(true)} className={`fas fa-comment ${activChat ? ' displayNone' : ''}`}></i>
            }
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
            <div className={`videoChat ${!activChat ? ' displayNone' : ''}`}>
                <div className="videoChatTop">
                    <span>
                        Чат
                    </span>
                    <div onClick={()=> setActivChat(false)}>
                        X
                    </div>
                </div>

                <ul>
                    {
                        massager.map((item, index) => (
                            <li key={index}>
                                <h6>{JSON.parse(item.data.email)}</h6>
                                <p>{JSON.parse(item.data.text)}</p>
                                <div>{time}</div>
                            </li>
                        )).reverse()
                    }
                    <li>
                        <p>Добро пожаловать в чат</p>
                    </li>
                </ul>
                <div className="formSendMessage">
                    <input onKeyDown={handleKeyDown} onChange={e => setText(e.target.value)} type="text" className="form-control" placeholder="Новое сообщение" />
                    <button onClick={() => sendMessageFun()}><i className='fas fa-location-arrow'></i></button>
                </div>
            </div>

        </main>
    )
}
export default VideoRoomPage
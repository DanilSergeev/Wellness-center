import { useParams } from "react-router"
import useWebRTC, { LOCAL_VIDEO } from "../hooks/useWebRTC"



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
        if(arr.length <= 4){
            return row.map(() => ({
                width: "50%", height
            }))
        }
        return [{ width: "33%", height }]

    }).flat()
}

const VideoRoomPage = () => {
    const { id: roomID } = useParams()
    const { clients, provideMediaRef } = useWebRTC(roomID)
    const videoLayout = layout(clients.length)


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
                        <h6>Имя фамилия</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur earum doloribus veniam reprehenderit eligendi et, rerum modi voluptates delectus quis quae rem aperiam repellat sed sunt atque neque omnis officia?</p>
                        <div>12:19</div>
                    </li>
                    <li>
                    <h6>Имя фамилия</h6>
                        <p>Lorem  veniam reprehenderit eligendi et, rerum modi voluptates delectus quis quae rem aperiam repellat sed sunt atque neque omnis officia?</p>
                        <div>12:59</div>
                    </li>
                </ul>
                <div className="formSendMessage">
                    <input type="text" class="form-control" placeholder="Новое сообщение"/>
                    <button><i class='fas fa-location-arrow'></i></button>
                </div>
            </div>
        </main>
    )
}
export default VideoRoomPage
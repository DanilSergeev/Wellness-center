import { useParams } from "react-router"
import useWebRTC, { LOCAL_VIDEO } from "../hooks/useWebRTC"

function layout(clientNumber = 1) {
    const pairs = Array.from({ length: clientNumber }).reduce((acc, next, index, arr) => {
        if (index % 2 === 0) {
             acc.push(arr.slice(index, index + 2))
        }
        return acc
    }, [])

    const rowsNumber = pairs.length
    const height = `${100 / rowsNumber}%`

    return pairs.map((row, index, arr) => {
        if (index === arr.length - 1 && row.length === 1) {
            return [{ width: "100%", height }]
        }
        return row.map(() => ({
            width: "50%", height
        }))
    }).flat()
}


const VideoRoomPage = () => {
    const { id: roomID } = useParams()
    const { clients, provideMediaRef } = useWebRTC(roomID)
    const videoLayout = layout(clients.length)


    return (
        <main className="videoRoomMain">
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
        </main>
    )
}
export default VideoRoomPage
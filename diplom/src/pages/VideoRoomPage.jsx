import { useParams } from "react-router"
import useWebRTC, { LOCAL_VIDEO } from "../hooks/useWebRTC"

const VideoRoomPage = () => {
    const {id: roomID} = useParams()
    const {clients , provideMediaRef} = useWebRTC(roomID)
    return (
        <main>
            {clients.map(clientID=>{
                return <div>
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
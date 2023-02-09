import { useParams } from "react-router"
import useWebRTC from "../hooks/useWebRTC"

const VideoRoomPage = () => {
    const {id: roomID} = useParams()
    useWebRTC(roomID)
    return (
        <main>
            eee
        </main>
    )
}
export default VideoRoomPage
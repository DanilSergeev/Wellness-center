import { useEffect, useRef } from "react";
import socket from "../socket";
import ACTIONS from "../socket/actions";
import useStateWithCallback from "./useStateWithCallback";

export default function useWebRTC(roomID) {
    const [clients, setClients] = useStateWithCallback([])

    const peerConnections = useRef({})
    const localMadiaStream = useRef(null)
    const peerMadiaElements = useRef({})
    
    useEffect(()=>{
        async function startCapture() {
            
        }
        startCapture.than(()=> socket.emit(ACTIONS.JOIN,{room: roomID}))
    },[roomID])
}
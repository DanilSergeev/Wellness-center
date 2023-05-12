import { useEffect, useRef, useState } from "react"
import socket from "../socket"
import ACTIONS from "../socket/actions.js"
import { v4 } from "uuid"
import { useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Line from '../modules/Line';
import UserService from "../services/userService";
import { useDispatch, useSelector } from "react-redux"
import { getUsersActoion } from "../store/user-reduser";



const ConnectionToVideoRoomPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [rooms, setRooms] = useState([])
    const rootNode = useRef()
    const authReduser = useSelector(state => state.authReduser);
    const userReduser = useSelector(state => state.userReduser);
    const location = useLocation();

    useEffect(() => {
        socket.emit(ACTIONS.GET_ROOMS);
        socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
            if (rootNode.current) {
                setRooms(rooms)
            }
        })
    }, [location.pathname])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const response = await UserService.getUsers()
            dispatch(getUsersActoion(response))
        } catch (error) {
            console.log(error)
        }
    }

    const createRoom = () => {
        let roomID = v4()
        navigate(`/videoRoom/${roomID}`)
    }


    // const getEmailTitle =  (hash) => {
    //     try {
    //         let id = hash.split(',')[1]
    //         let res = userReduser.users.filter(item=> item.id === Number(id))
    //         return res[0].email
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }



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
                                    <li key={item}>
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
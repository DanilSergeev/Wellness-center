import { useDispatch, useSelector } from "react-redux"
import Line from "../modules/Line"
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import UserService from "../services/userService";
import { getUserActoion, getUsersActoion } from "../store/user-reduser";
import DoctorService from "../services/doctorService";
import { getDoctorAction, getDoctorsAction } from "../store/dictor-reduser";



const AdminPage = () => {
    const dispatch = useDispatch()

    const userReduser = useSelector(state => state.userReduser);
    const dictorReduser = useSelector(state => state.dictorReduser);
    const [selectedOptionChangeUser, setSelectedOptionChangeUser] = useState("")
    const [selectedOptionChangeDoctor, setSelectedOptionChangeDoctor] = useState("");

    const [alertUser, setAlertUser] = useState({ show: false, text: "", variant: "warning" })



    const [dataUser, setDataUser] = useState({
        role: "",
        isNoSelected: true
    })
    const [dataDoctor, setDataDoctor] = useState({
        name: "",
        position: "",
        data: "",
        file: null,
        isNoSelected: true
    })

    const selectUserFun = async (data) => {
        setSelectedOptionChangeUser(data)
        setDataUser(prev => ({ ...prev, isNoSelected: false }))
        const response = await UserService.getUser(data)
        dispatch(getUserActoion(response))
    }



    const selectDoctorFun = async (data) => {
        setSelectedOptionChangeDoctor(data)
        const response = await DoctorService.getDoctor(data)
        dispatch(getDoctorAction(response))
        setDataDoctor(prev => ({
            ...prev,
            name: response.data?.name,
            position: response.data?.position,
            data: response.data?.data,
            file: response.data?.file,
            isNoSelected: false
        }))
    }




    const getUsers = async () => {
        try {
            const response = await UserService.getUsers()
            dispatch(getUsersActoion(response))
        } catch (error) {
            console.log(error)
        }
    }

    const getDoctors = async () => {
        try {
            const response = await DoctorService.getDoctors()
            dispatch(getDoctorsAction(response))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
        getDoctors()
    }, [])


    const sendDataUser = async () => {
        setAlertUser(prev => ({ ...prev, show: false }))
        try {
            const res = await UserService.updateUser(selectedOptionChangeUser, dataUser.role)
            setAlertUser(prev => ({ ...prev, show: true, text: `${res}`, variant: "success" }))
            selectUserFun(selectedOptionChangeUser)
        } catch (error) {
            setAlertUser(prev => ({ ...prev, show: true, text: `Ошибка - ${error?.message}`, variant: "danger" }))
        }
    }

    const sendDataDoctor = async () => {
        setAlertUser(prev => ({ ...prev, show: false }))
        try {
            const formData = new FormData()
            formData.append('name', dataDoctor.name)
            formData.append('position', dataDoctor.position)
            formData.append('data', dataDoctor.data)
            formData.append('file', dataDoctor.file)
            console.log(formData)

            const res = await DoctorService.updateDoctor(
                selectedOptionChangeDoctor,
                formData
            )
            setAlertUser(prev => ({ ...prev, show: true, text: `${res}`, variant: "success" }))
            selectDoctorFun(selectedOptionChangeDoctor)
        } catch (error) {
            setAlertUser(prev => ({ ...prev, show: true, text: `Ошибка - ${error?.message}`, variant: "danger" }))
        }
    }

    return (
        <main >
            <Line title={"ADMIN LIST"} >
                Добро пожаловать в админку
            </Line>
            <section className='wrapper indent-top indent-bot authSection'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            ФОРМА ИЗМИНЕНИЯ <span className='colorFirst'>ПОЛЬЗОВАТЕЛЯ</span>
                        </Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Выберите пользователя:</Form.Label>
                        <Form.Select value={selectedOptionChangeUser} onChange={e => selectUserFun(e.target.value)}>
                            <option value="" disabled>Выберите...</option>
                            {
                                userReduser.users.map(item => (
                                    <option key={item.id} value={item.id}>{item.email}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Выберите роль (Текущие занчение - {userReduser.user.role}):</Form.Label><br />

                        <Form.Select disabled={dataUser.isNoSelected} value={dataUser.role} onChange={e => setDataUser(prev => ({ ...prev, role: e.target.value }))}>
                            <option value="" disabled>Выберите...</option>
                            <option value="USER">Пользователь</option>
                            <option value="DOCTOR">Доктор</option>
                            <option value="ADMIN">Админ</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Пользователь - {userReduser.user.isActivated ? `Подтвержден` : `Не подтвержден`}</Form.Label>
                    </Form.Group>

                    <Button onClick={() => sendDataUser()} variant="danger" disabled={dataUser.isNoSelected || dataUser.role === ""} >
                        Изменить
                    </Button>
                </Form>




                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            ФОРМА ИЗМИНЕНИЯ <span className='colorFirst'>ВРАЧЕЙ</span>
                        </Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Выберите пользователя:</Form.Label>
                        <Form.Select value={selectedOptionChangeDoctor} onChange={e => selectDoctorFun(e.target.value)}>
                            <option value="" disabled>Выберите...</option>
                            {
                                dictorReduser.doctors.map(item => (
                                    <option key={item.id} value={item.id}>{item.user.email}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите имя  (Текущие занчение - {dictorReduser.doctor?.name}):</Form.Label>
                        <Form.Control value={dataDoctor.name} onChange={e => setDataDoctor(prev => ({ ...prev, name: e.target.value }))} disabled={dataDoctor.isNoSelected} type="text" placeholder="Введите имя " />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите должность  (Текущие занчение - {dictorReduser.doctor?.position}):</Form.Label>
                        <Form.Control value={dataDoctor.position} onChange={e => setDataDoctor(prev => ({ ...prev, position: e.target.value }))} disabled={dataDoctor.isNoSelected} type="text" placeholder="Введите должность" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите данные  (Текущие занчение - {dictorReduser.doctor?.data}):</Form.Label>
                        <Form.Control value={dataDoctor.data} onChange={e => setDataDoctor(prev => ({ ...prev, data: e.target.value }))} disabled={dataDoctor.isNoSelected} type="text" placeholder="Введите данные" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Вставте фото: ( Текущие занчение - {dataDoctor.file?.name ? dataDoctor.file?.name : dataDoctor.file})</Form.Label>
                        <Form.Control onChange={e => setDataDoctor(prev => ({ ...prev, file: e.target.files[0] }))} disabled={dataDoctor.isNoSelected} type="file" />
                    </Form.Group>


                    <Button onClick={() => sendDataDoctor()} variant="danger" disabled={dataDoctor.isNoSelected} >
                        Изменить
                    </Button>
                </Form>
            </section>
            <Alert className="wrapper mb-5" show={alertUser.show} variant={alertUser.variant} onClick={() => setAlertUser(prev => ({ ...prev, show: false }))} >
                {alertUser.text}
            </Alert>
        </main>
    )
}
export default AdminPage
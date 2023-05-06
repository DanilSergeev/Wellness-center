import { useDispatch, useSelector } from "react-redux"
import Line from "../modules/Line"
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import DoctorService from "../services/doctorService";
import { getDoctorByIdAction } from "../store/dictor-reduser";
import { Navigate } from 'react-router-dom';



const DoctorPage = () => {
    const dispatch = useDispatch()
    const dictorReduser = useSelector(state => state.dictorReduser);
    const authReduser = useSelector(state => state.authReduser);

    const [alertUser, setAlertUser] = useState({ show: false, text: "", variant: "warning" })



    const [dataDoctor, setDataDoctor] = useState({
        name: "",
        position: "",
        data: "",
        file: null,
    })




    const getDoctor = async () => {
        try {
            const response = await DoctorService.getDoctorByUserID(2)
            dispatch(getDoctorByIdAction(response))
            setDataDoctor(prev => ({
                ...prev,
                name: dictorReduser.doctor?.name,
                position: dictorReduser.doctor?.position,
                data: dictorReduser.doctor?.data,
                file: dictorReduser.doctor?.file,
            }))
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getDoctor()
    }, [])




    const sendDataDoctor = async () => {
        setAlertUser(prev => ({ ...prev, show: false }))
        try {
            let formData = new FormData()
            formData.append("name", dataDoctor.name)
            formData.append("position", dataDoctor.position)
            formData.append("data", dataDoctor.data)
            formData.append("file", dataDoctor.file)
            console.log(formData)

            const res = await DoctorService.updateDoctor(
                dictorReduser.doctor.userId,
                formData
            )
            setAlertUser(prev => ({ ...prev, show: true, text: `${res}`, variant: "success" }))
            getDoctor(dictorReduser.doctor.userId)
        } catch (error) {
            setAlertUser(prev => ({ ...prev, show: true, text: `Ошибка - ${error?.message}`, variant: "danger" }))
        }
    }

    if (!authReduser.isAuth || authReduser.role !== "DOCTOR" || !authReduser.isActivated) {
        return <Navigate to="/" replace />;
    }

    return (
        <main >
            <Line title={"DOCTOR ROOM"}>
                Добро пожаловать в личный кабинет
            </Line>
            <section className='wrapper indent-top indent-bot authSection'>


                <Form className="marginCenter">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            ФОРМА ИЗМИНЕНИЯ <span className='colorFirst'>ВРАЧА</span>
                        </Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Пользователь: {authReduser.email}</Form.Label>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите имя  (Текущие занчение - {dictorReduser.doctor?.name}):</Form.Label>
                        <Form.Control value={dataDoctor.name} onChange={e => setDataDoctor(prev => ({ ...prev, name: e.target.value }))} type="text" placeholder="Введите имя " />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите должность  (Текущие занчение - {dictorReduser.doctor?.position}):</Form.Label>
                        <Form.Control value={dataDoctor.position} onChange={e => setDataDoctor(prev => ({ ...prev, position: e.target.value }))} type="text" placeholder="Введите должность" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите данные  (Текущие занчение - {dictorReduser.doctor?.data}):</Form.Label>
                        <Form.Control value={dataDoctor.data} onChange={e => setDataDoctor(prev => ({ ...prev, data: e.target.value }))} type="text" placeholder="Введите данные" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Вставте фото: ( Текущие занчение - {dataDoctor.file?.name ? dataDoctor.file?.name : dataDoctor.file})</Form.Label>
                        <Form.Control onChange={e => setDataDoctor(prev => ({ ...prev, file: e.target.files[0] }))} type="file" />
                    </Form.Group>


                    <Button onClick={() => sendDataDoctor()} variant="danger"  >
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
export default DoctorPage
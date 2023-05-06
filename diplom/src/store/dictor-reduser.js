
const defaultState = {
    doctors: [{
        id: null,
        name: null,
        position: null,
        data: null,
        file: "noimage.jpg",
        userId: null,
        user: { email: null, role: "DOCTOR" }
    }],
    doctor: {
        id: null,
        name: null,
        position: null,
        data: null,
        file: "noimage.jpg",
        userId: null,
        user: { email: null, role: "DOCTOR" }
    }

}

const GET_DOCTORS = "GET_DOCTORS"
const GET_DOCTOR = "GET_DOCTOR"
const GET_DOCTOR_BY_ID = "GET_DOCTOR_BY_ID"

export const dictorReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_DOCTORS:
            // return action.payload.data.map(item => ({
            //     id: item.id,
            //     name: item.name,
            //     data: item.data,
            //     file: item.file,
            //     position: item.position,
            //     user: item.user,
            // }))
            return { ...state, doctors: action.payload.data }

        case GET_DOCTOR:
            return { ...state, doctor: action.payload.data }
        case GET_DOCTOR_BY_ID:
            return { ...state, doctor: action.payload.data }


        default:
            return state
    }
}


export const getDoctorsAction = (payload) => ({ type: GET_DOCTORS, payload })
export const getDoctorAction = (payload) => ({ type: GET_DOCTOR, payload })
export const getDoctorByIdAction = (payload) => ({ type: GET_DOCTOR_BY_ID, payload })
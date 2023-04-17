
const defaultState = {
    id: null,
    email: null,
    role: "USER",
    isActivated: false,
    isAuth: false
}
const SET_LOGIN_USER = "SET_LOGIN_USER"
const SET_REGISTER_USER = "SET_REGISTER_USER"
const CHECK_AUTH = "CHECK_AUTH"
const LOGOUT = "LOGOUT"

export const authReduser = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOGIN_USER:
            try {
                localStorage.setItem("token", action.payload.accessToken)
                return {
                    ...state,
                    id: action.payload.user.id,
                    email: action.payload.user.email,
                    role: action.payload.user.role,
                    isActivated: action.payload.user.isActivated,
                    isAuth: true
                }
            } catch (error) {
                console.log(error?.message)
                return error
            }
        case SET_REGISTER_USER:
            try {
                localStorage.setItem("token", action.payload.accessToken)
                return {
                    ...state,
                    id: action.payload.user.id,
                    email: action.payload.user.email,
                    role: action.payload.user.role,
                    isActivated: action.payload.user.isActivated,
                    isAuth: true
                }
            } catch (error) {
                console.log(error?.message)
                return error
            }


        case CHECK_AUTH:
            try {
                localStorage.setItem("token", action.payload.data.tokens.accessToken)
                return {
                    ...state,
                    id: action.payload.data.userDto.id,
                    email: action.payload.data.userDto.email,
                    role: action.payload.data.userDto.role,
                    isActivated: action.payload.data.userDto.isActivated,
                    isAuth: true
                }
            } catch (error) {
                console.log(error?.message)
                return error
            }

        // case LOGOUT:
        //     try {
        //         await AuthService.logout()
        //         localStorage.removeItem("token")
        //         return {
        //             ...state,
        //             id: null,
        //             email: null,
        //             role: "USER",
        //             isActivated: false,
        //             isAuth: false
        //         }
        //     } catch (error) {
        //         console.log(error?.message)
        //         return error
        //     }

        default:
            return state
    }
}


export const setLoginUserAction = (payload) => ({type: SET_LOGIN_USER, payload})
export const setRegisterUserAction = (payload) => ({type: SET_REGISTER_USER, payload})
export const checkAuthAction = (payload) => ({type: CHECK_AUTH, payload})
export const logoutAction = (payload) => ({type: LOGOUT, payload})


const defaultState = {
    users: [{
        id: null,
        email: null,
        role: "USER",
    }],
    user: {
        id: null,
        email: null,
        role: "USER",
        isActivated: false
    }
}

const GET_USERS = "GET_USERS"
const GET_USER = "GET_USER"

export const userReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload.data }

        case GET_USER:
            return { ...state, user: action.payload.data }

        default:
            return state
    }
}

export const getUsersActoion = (payload) => ({ type: GET_USERS, payload })
export const getUserActoion = (payload) => ({ type: GET_USER, payload })
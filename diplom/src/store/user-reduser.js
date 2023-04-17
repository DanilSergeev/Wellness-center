

const defaultState = {
    users: [{ id: 11, email: null, role: "USER", }]
}

export const userReduser = (state = defaultState, action) => {
    switch (action.type) {
        case "getUsers":
            return { ...state, users: action.payload }
        default:
            return state
    }
}
import { combineReducers, createStore } from "redux"
import { reduser } from "./test"

const rootReduser = combineReducers({
    test: reduser
})

export const store = createStore(rootReduser)
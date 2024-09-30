import { combineReducers } from "redux"
import { legacy_createStore as createStore, legacy_createStore } from "redux";
import { authReduser } from "./auth-reduser"
import { userReduser } from "./user-reduser"
import { dictorReduser } from "./dictor-reduser"
import { composeWithDevTools } from "redux-devtools-extension"

const rootReduser = combineReducers({
    authReduser,
    userReduser,
    dictorReduser
})

export const store = createStore(rootReduser, composeWithDevTools())
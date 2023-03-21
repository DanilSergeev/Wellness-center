const defaultState = {
    value: 'ЧТо?'
}

const NAMETYPE = "Название типа"

export const reduser = (state = defaultState, action) =>{
    switch (action.type) {
        case NAMETYPE:
            return {...state, value: "Все пиздато"} 
        case "Все не пиздато":
            return {...state, value: "Все не пиздато"} 
        default:
            return state
    }
}
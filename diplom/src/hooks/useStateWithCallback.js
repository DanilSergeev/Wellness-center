const { useState, useCallback, useRef, useEffect } = require("react")

const useStateWithCallback = initialState =>{
    const [state, setState] = useState(initialState)
    const cdRef = useRef()

    
    const updateState = useCallback((newState, cb)=>{
        cdRef.current = cb
        setState(prev=> typeof newState === 'function'? newState(prev): newState)

    },[])
    useEffect(()=>{
        if(cdRef){
            cdRef.current(state)
            cdRef.current = (null)
        }
    },[state])

    return [state, updateState]
}
export default useStateWithCallback
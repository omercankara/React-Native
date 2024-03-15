const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count:state.count+action.payload }
        case 'decrement':
            return { ...state, count:state.count-action.payload }
        default:
            return state

    }
}

export default counterReducer
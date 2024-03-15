const boxReducer = (state, action) => {
    switch (action.type) {
        case 'Change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload }
        case 'Change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload }
        case 'Change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload }
    }
}

export default boxReducer
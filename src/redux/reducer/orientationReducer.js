const initState = {
    orientations: []
}


const orientationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_ORIENTATION':
            state = {
                ...state,
                orientations: action.data
            };
            break;
        default:
            return state;
    }
    return state;
};

export default orientationReducer;
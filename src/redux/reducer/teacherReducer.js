const initState = {
    teachers: []
}


const teacherReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_TEACHER':
            state = {
                ...state,
                teachers: action.data
            };
            break;
    }
    return state;
};

export default teacherReducer;
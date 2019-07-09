import teacherReducer from './reducer/teacherReducer';
import orientationReducer from './reducer/orientationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    teacherReducer,
    orientationReducer
});

export default rootReducer;

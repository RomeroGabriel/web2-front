import { createStore, applyMiddleware } from 'redux';
import root from './rootReducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {

    const middleware = applyMiddleware(thunkMiddleware, createLogger());

    const store = createStore(root, middleware);

    return store;
}
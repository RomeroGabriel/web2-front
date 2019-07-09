import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import Store from './redux/store';

const App = () => {
    let store = Store();
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

export default App;
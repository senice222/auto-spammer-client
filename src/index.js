import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './reducers/rootReducer';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={store}>
        <SnackbarProvider>
            <App/>
        </SnackbarProvider>
    </Provider>
);

reportWebVitals();

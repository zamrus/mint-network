import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import AppContainer from './App';
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

import axios from 'axios';
import dotenv from 'dotenv';

const persistedReducer = persistReducer({
    key: "root",
    storage
}, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

dotenv.config();

axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <PersistGate loading={null} persistor={ persistor }>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

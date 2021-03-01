import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import '../src/Common/commonStyles.scss'

ReactDOM.render(

    <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,

    document.getElementById('root')
);

reportWebVitals();

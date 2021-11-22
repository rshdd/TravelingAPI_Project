import React from 'react';
import App from './Components/App';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import {history, store} from "./Store/CreateStore";
import {initApp} from "./Core/Actions/InitActions";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

export const initCoreApp = (store = {}, history = {}) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

store.dispatch(initApp());
initCoreApp(store, history);


import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux'; 
import configureStore from "./redux/store";
import allReducers from "./redux/reducers";

const store = configureStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux'; 
import configureStore from "./redux/store";
import allReducers from "./redux/reducers";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns"; 

const store = configureStore(allReducers);

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
  <Provider store={store}>
    <App />
  </Provider>
  </MuiPickersUtilsProvider>,
  document.getElementById("root")
);


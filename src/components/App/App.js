import React from 'react';
import styles from './App.module.css';
import AddBttn from '../AddBttn/AddBttn';
import Main from '../Main/Main';

const App = () => {
  return (
    <div className="App">
        <Main />
        <AddBttn />
    </div>
  );
}

export default App;

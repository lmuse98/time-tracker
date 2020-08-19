import React, {useEffect } from 'react';
import styles from './App.module.css';
import AddBttn from '../AddBttn/AddBttn';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import {useDispatch } from 'react-redux';
import { addReports} from "../../redux/actions";
import { getReports} from "../../services";



const App = () => {
  
  const dispatch = useDispatch();

  const fetchData = async () => {
    const json = await getReports();
    dispatch(addReports(json));
  };

  useEffect(() => {
    fetchData();
  });


  return (
    <div className="App">
        <Main />
        <AddBttn />
        <Modal />

    </div>
    

   
  );
}

export default App;

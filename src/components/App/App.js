import React, {useEffect } from 'react';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import {useDispatch } from 'react-redux';
import { addReports} from "../../redux/actions";
import { getReports} from "../../services";
import Weekpicker from '../Weekpicker/Weekpicker';




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
        <Modal />
        <Weekpicker />
        

    </div>
    

   
  );
}

export default App;

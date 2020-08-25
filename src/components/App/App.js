import React, {useEffect, useState } from 'react';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import {useDispatch } from 'react-redux';
import { addReports} from "../../redux/actions";
import { getReports} from "../../services";
import { getWeek } from 'date-fns';
import Header from '../Header/Header';




const App = () => {
  
  const dispatch = useDispatch();
  const [currentWeek, setCurrentWeek] = useState(getWeek(new Date()))

  const fetchData = async () => {
    const json = await getReports();
    dispatch(addReports(json));
  };

  useEffect(() => {
    fetchData();
  });


  return (
    <div className="App">
        <Main currentWeek={currentWeek}/>
        <Modal />
        <Header setCurrentWeek={setCurrentWeek}/>
        
        

    </div>
    

   
  );
}

export default App;

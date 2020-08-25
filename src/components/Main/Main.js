import React from 'react';
import styles from './Main.module.css';
import ReportsList from '../ReportsList/ReportsList';


const Main = (props) => {
    const { currentWeek } = props;
    return(
        <div className = {styles.main}>
            <ReportsList currentWeek={currentWeek}/>
           
        </div>
    )
}

export default Main;
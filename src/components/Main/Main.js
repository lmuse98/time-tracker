import React from 'react';
import styles from './Main.module.css';
import ReportsList from '../ReportsList/ReportsList';

const Main = () => {
    return(
        <div className = {styles.main}>
            <ReportsList />

        </div>
    )
}

export default Main;
import React from 'react';
import styles from './Header.module.css';
import Weekpicker from '../Weekpicker/Weekpicker';

const Header = (props) => {
    const { setCurrentWeek } = props;
    return (
        <div className = {styles.header}>
            <Weekpicker setCurrentWeek={setCurrentWeek}/>
        </div>
    )
}


export default Header;
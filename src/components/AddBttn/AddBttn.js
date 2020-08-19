import React from 'react';
import styles from './AddBttn.module.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const AddBttn = () => {
    return(
        <div>
            <AddCircleIcon className = {styles.icon}>
                
            </AddCircleIcon>

            
        </div>
    )
}

export default AddBttn;
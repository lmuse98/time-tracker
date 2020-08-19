import { combineReducers } from 'redux';
import reports from './reports';



let reducers = {
    reports,
    
}

const allReducers = combineReducers(reducers);

export default allReducers;
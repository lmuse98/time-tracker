import { ADD_REPORTS, ADD_REPORT , REMOVE_REPORT,  } from '../actions';


const initialState = {
  reports: [],
  filteredReports: [],

  
};



function addReports(state, action) {
  return {
    ...state,
    reports: [...state.reports, ...action.payload],
    filteredReports: [...state.filteredReports, ...action.payload]
  };
}

function addReport(state, action) {
  return {
    ...state,
    reports: [...state.reports, action.payload],
    filteredReports: [...state.filteredReports, action.payload]
  };
}

function removeReport(state, action) {
  return {
    ...state,
    reports: [
      ...state.reports.slice(0, action.payload),
      ...state.reports.slice(action.payload + 1)
    ],
    filteredReports: [
      ...state.filteredReports.slice(0, action.payload),
      ...state.filteredReports.slice(action.payload + 1)
    ],
  };
}


 




export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_REPORTS:
      return addReports(state, action);

    case ADD_REPORT:
      return addReport(state, action);
    
    case REMOVE_REPORT:
      return removeReport(state, action);

    default:
      return state;
  }
}

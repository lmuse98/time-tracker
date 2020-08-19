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
      ...state.tasks.slice(0, action.payload),
      ...state.tasks.slice(action.payload + 1)
    ],
    filteredReports: [
      ...state.filteredReports.slice(0, action.payload),
      ...state.filteredReports.slice(action.payload + 1)
    ],
  };
}

function editTask(state, action) {
  const index = state.tasks.findIndex(c => c.id === action.payload.id);
  const indexF = state.filteredTasks.findIndex(c => c.id === action.payload.id);

  return {
    ...state,
    tasks: [
      ...state.users.slice(0, index),
      action.payload,
      ...state.users.slice(index + 1)
    ],
    filteredTasks: [
      ...state.filteredTasks.slice(0, indexF),
      action.payload,
      ...state.filteredTasks.slice(indexF + 1)
    ],
  };
}


function filterTasks(state, action) {
  return Object.assign({}, state, {
    filteredTasks: state.tasks.filter(
      user =>
        user.name.toLowerCase().search(action.payload.toLowerCase()) !== -1
    )
  });
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

import { ADD_TASKS, ADD_TASK , REMOVE_TASK, EDIT_TASK, FILTER_TASKS, } from '../actions';


const initialState = {
  tasks: [],

  
};



function addTasks(state, action) {
  return {
    ...state,
    tasks: [...state.tasks, ...action.payload],
    filteredTasks: [...state.filteredTasks, ...action.payload]
  };
}

function addTask(state, action) {
  return {
    ...state,
    tasks: [...state.tasks, action.payload],
    filteredTasks: [...state.filteredTasks, action.payload]
  };
}

function removeTask(state, action) {
  return {
    ...state,
    tasks: [
      ...state.tasks.slice(0, action.payload),
      ...state.tasks.slice(action.payload + 1)
    ],
    filteredTasks: [
      ...state.filteredTasks.slice(0, action.payload),
      ...state.filteredTasks.slice(action.payload + 1)
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
    case ADD_TASKS:
      return addTasks(state, action);

    case ADD_TASK:
      return addTask(state, action);
    
    case REMOVE_TASK:
      return removeTask(state, action);
    
    case EDIT_TASK:
      return editTask(state, action);

    case FILTER_TASKS:
      return filterTasks(state, action);

    default:
      return state;
  }
}

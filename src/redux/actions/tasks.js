import { createAction } from '../../utils/action-helpers';

export const ADD_TASKS = "ADD_TASKS";
export const addTasks = createAction(ADD_TASKS);

export const ADD_TASK = "ADD_TASK";
export const addTask = createAction(ADD_TASK);

export const REMOVE_TASK = "REMOVE_TASK";
export const removeTask = createAction(REMOVE_TASK);

export const EDIT_TASK = "EDIT_TASK";
export const editTask = createAction(EDIT_TASK);

export const FILTER_TASKS = "FILTER_TASKS";
export const filterTasks = createAction(FILTER_TASKS);

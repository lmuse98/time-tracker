import { createAction } from '../../utils/action-helpers';

export const ADD_REPORTS = "ADD_REPORTS";
export const addReports = createAction(ADD_REPORTS);

export const ADD_REPORT = "ADD_REPORT";
export const addReport = createAction(ADD_REPORT);

export const REMOVE_REPORT = "REMOVE_REPORT";
export const removeReport = createAction(REMOVE_REPORT);

export const FILTER_REPORTS = "FILTER_REPORTS";
export const filterReports = createAction(FILTER_REPORTS);



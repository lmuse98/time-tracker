import callApi from '../utils/call-api';

export const getReports = () => callApi("/reports" , { method : "GET"});
export const postReport = body => callApi("/reports" , { method: "POST" , body});

import {
  FETCH_JOB_REQUEST,
  FETCH_JOB_SUCCESS,
  FETCH_JOB_FAILURE,
} from "./jobTypes";

import * as api from "../../service/Api";

export const fetchJobRequest = (status, cluster) => async (dispatch) => {
  dispatch({ type: FETCH_JOB_REQUEST });
  try {
    const response = await api.getJobs(status, cluster);
    dispatch(fetchJobSuccess(response.jobs));
  } catch (e) {
    dispatch(fetchJobFailure(e));
  }
};

export const fetchJobSuccess = (jobs) => {
  return {
    type: FETCH_JOB_SUCCESS,
    payload: jobs,
  };
};

export const fetchJobFailure = (error) => {
  return {
    type: FETCH_JOB_FAILURE,
    payload: error.toString(),
  };
};

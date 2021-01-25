import {
  FETCH_CONFIG_REQUEST,
  FETCH_CONFIG_SUCCESS,
  FETCH_CONFIG_FAILURE,
} from "./configTypes";

import * as api from "../../service/Api";

export const fetchConfigRequest = () => async (dispatch) => {
  dispatch({ type: FETCH_CONFIG_REQUEST });
  try {
    const config = await api.getConfig();
    dispatch(fetchConfigSuccess(config));
  } catch (e) {
    dispatch(fetchConfigFailure(e));
  }
};

export const fetchConfigSuccess = (config) => {
  return {
    type: FETCH_CONFIG_SUCCESS,
    payload: config,
  };
};

export const fetchConfigFailure = (error) => {
  return {
    type: FETCH_CONFIG_FAILURE,
    payload: error.toString(),
  };
};

import {
  FETCH_SECRET_REQUEST,
  FETCH_SECRET_SUCCESS,
  FETCH_SECRET_FAILURE,
  CREATE_SECRET_REQUEST,
  CREATE_SECRET_SUCCESS,
  CREATE_SECRET_FAILURE,
  RESET_ERROR
} from "./secretTypes";

import * as api from "../../service/Api";

export const fetchSecretRequest = () => async (dispatch) => {
  dispatch({ type: FETCH_SECRET_REQUEST });
  try {
    const secrets = await api.getSecrets();
    dispatch(fetchSecretSuccess(secrets));
  } catch (e) {
    dispatch(fetchSecretFailure(e));
  }
};

export const fetchSecretSuccess = (secrets) => {
  return {
    type: FETCH_SECRET_SUCCESS,
    payload: secrets,
  };
};

export const fetchSecretFailure = (error) => {
  return {
    type: FETCH_SECRET_FAILURE,
    payload: error.toString(),
  };
};

export const createSecretRequest = (key, value) => async (dispatch) => {
  dispatch({ type: CREATE_SECRET_REQUEST });
  try {
    await api.addSecret(key, value);
    dispatch(createSecretSuccess(key));
  } catch (e) {
    dispatch(createSecretFailure(e));
  }
};

export const createSecretSuccess = (key) => {
  return {
    type: CREATE_SECRET_SUCCESS,
    payload: key,
  };
};

export const createSecretFailure = (error) => {
  return {
    type: CREATE_SECRET_FAILURE,
    payload: error.toString(),
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR,
  };
};

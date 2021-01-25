const {
  FETCH_JOB_REQUEST,
  FETCH_JOB_SUCCESS,
  FETCH_JOB_FAILURE,
} = require("./jobTypes");

const initialState = {
  loading: false,
  jobs: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOB_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_JOB_SUCCESS:
      return {
        loading: false,
        jobs: action.payload,
        error: "",
      };
    case FETCH_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

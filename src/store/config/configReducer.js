const {
  FETCH_CONFIG_REQUEST,
  FETCH_CONFIG_SUCCESS,
  FETCH_CONFIG_FAILURE,
} = require("./configTypes");

const initialState = {
  loading: false,
  clusters: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONFIG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONFIG_SUCCESS:
      return {
        loading: false,
        clusters: action.payload.clusters,
        error: "",
      };
    case FETCH_CONFIG_FAILURE:
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

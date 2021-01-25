const {
  FETCH_SECRET_REQUEST,
  FETCH_SECRET_SUCCESS,
  FETCH_SECRET_FAILURE,
  CREATE_SECRET_REQUEST,
  CREATE_SECRET_SUCCESS,
  CREATE_SECRET_FAILURE,
  RESET_ERROR,
} = require("./secretTypes");

const initialState = {
  loading: false,
  secrets: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SECRET_REQUEST:
    case CREATE_SECRET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SECRET_SUCCESS:
      return {
        loading: false,
        secrets: action.payload,
        error: "",
      };
    case CREATE_SECRET_SUCCESS:
      return {
        loading: false,
        secrets: [...state.secrets, { key: action.payload }],
        error: "",
      };
    case FETCH_SECRET_FAILURE:
    case CREATE_SECRET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;

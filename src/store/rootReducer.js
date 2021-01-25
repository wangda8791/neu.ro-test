import { combineReducers } from "redux";
import configReducer from "./config/configReducer";
import jobReducer from "./job/jobReducer";
import secretReducer from "./secret/secretReducer";

const rootReducer = combineReducers({
  config: configReducer,
  job: jobReducer,
  secret: secretReducer,
});

export default rootReducer;

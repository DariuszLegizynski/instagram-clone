import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import AuthReducer from "./auth/authReducer";

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	auth: AuthReducer,
});

export default rootReducer;

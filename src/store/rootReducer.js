import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import AuthReducer from "./auth/authReducer";
import postsReducer from "./posts/postsReducer";

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	auth: AuthReducer,
	postList: postsReducer,
});

export default rootReducer;

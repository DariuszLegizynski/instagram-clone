import {
	GET_SIGNOUT_ERROR,
	GET_SIGNOUT_SUCCESS,
} from "../actions/index";
import { auth } from "../../config/firebase";

export const authActionSignOut = () => async (dispatch) => {
	try {
		auth.signOut()
			.then(() => {
				dispatch({
					type: GET_SIGNOUT_SUCCESS,
				});
				localStorage.clear();
			})
			.catch((error) => {
				dispatch({
					type: GET_SIGNOUT_ERROR,
					error,
				});
			});
	} catch (error) {
		dispatch({
			type: GET_SIGNOUT_ERROR,
			error,
		});
	}
};

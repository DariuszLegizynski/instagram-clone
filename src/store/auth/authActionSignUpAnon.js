import {
	GET_SIGNIN_ANON_ERROR,
	GET_SIGNIN_ANON_SUCCESS,
} from "../actions/index";
import { auth } from "../../config/firebase";

export const authActionSignUpAnon = () => async (dispatch) => {
	try {
		auth.signInAnonymously()
			.then(() => {
				dispatch({
					type: GET_SIGNIN_ANON_SUCCESS,
				});
			})
			.catch((error) => {
				dispatch({
					type: GET_SIGNIN_ANON_ERROR,
					error,
				});
			});
	} catch (error) {
		dispatch({
			type: GET_SIGNIN_ANON_ERROR,
			error,
		});
	}
};

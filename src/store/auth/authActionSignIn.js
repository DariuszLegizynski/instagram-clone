import {
	GET_SIGNIN_ERROR,
	GET_SIGNIN_SUCCESS,
} from "../actions/index";
import { auth } from "../../config/firebase";

export const authActionSignIn = (credentials) => async (
	dispatch
) => {
	try {
		auth.signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		)
			.then(() => {
				dispatch({
					type: GET_SIGNIN_SUCCESS,
				});
			})
			.catch((error) => {
				dispatch({
					type: GET_SIGNIN_ERROR,
					error,
				});
			});
	} catch (error) {
		dispatch({
			type: GET_SIGNIN_ERROR,
			error,
		});
	}
};

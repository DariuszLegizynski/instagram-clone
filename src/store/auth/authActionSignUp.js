import {
	GET_SIGNUP_ERROR,
	GET_SIGNUP_SUCCESS,
} from "../actions/index";
import { auth } from "../../config/firebase";

export const authActionSignUp = (newUser) => async (
	dispatch
) => {
	try {
		auth.createUserWithEmailAndPassword(
			newUser.email,
			newUser.password
		)
			.then(() => {
				dispatch({
					type: GET_SIGNUP_SUCCESS,
				});
			})
			.catch((error) => {
				dispatch({
					type: GET_SIGNUP_ERROR,
					error,
				});
			});
	} catch (error) {
		dispatch({
			type: GET_SIGNUP_ERROR,
			error,
		});
	}
};

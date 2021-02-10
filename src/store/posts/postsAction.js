import {
	GET_POSTS_SUCCESS,
	GET_POSTS_ERROR,
} from "../actions/index";
import { db } from "../../config/firebase";

export const postsAction = () => async (dispatch) => {
	db.collection("posts").onSnapshot((snapshot) => {
		let posts = snapshot.docs.map((doc) => doc.data());
		dispatch({
			type: GET_POSTS_SUCCESS,
			payload: posts,
		});
	});
};

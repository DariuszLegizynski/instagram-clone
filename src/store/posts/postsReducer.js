import {
	GET_POSTS_SUCCESS,
	GET_POSTS_ERROR,
} from "../actions/index";

const DefaultState = {
	posts: [],
	errorMsg: "",
};

const postsReducer = (state = DefaultState, action) => {
	switch (action.type) {
		case GET_POSTS_ERROR:
			return {
				...state,
				errorMsg: "no posts found",
			};
		case GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.posts,
				errorMsg: "",
			};
		default:
			return state;
	}
};

export default postsReducer;

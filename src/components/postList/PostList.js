import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Post from "../post/Post";

// tools
import { v4 } from "uuid";
import _ from "lodash";

// actions
import { postsAction } from "../../store/posts/postsAction";

const PostList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(postsAction());
	}, [dispatch]);

	const selectDbPosts = useSelector(
		(state) => state.postList.posts
	);

	const showPosts = () => {
		if (!_.isEmpty(selectDbPosts)) {
			return selectDbPosts.map((el) => {
				return (
					<Post
						key={v4()}
						username={el.username}
						caption={el.caption}
						imageURL={el.imageUrl}
					/>
				);
			});
		} else {
			return <p>loading</p>;
		}
	};

	return <>{showPosts()}</>;
};

export default PostList;

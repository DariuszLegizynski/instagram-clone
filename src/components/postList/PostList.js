import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Post from "../post/Post";

// tools
import { v4 } from "uuid";

// config
import { db } from "../../config/firebase";

// actions
import { postsAction } from "../../store/posts/postsAction";

const PostList = () => {
	const dispatch = useDispatch();
	const selectPosts = useSelector((state) => state);

	useEffect(() => {
		dispatch(postsAction);
	}, [dispatch]);

	console.log(selectPosts);

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts").onSnapshot((snapshot) => {
			setPosts(snapshot.docs.map((el) => el.data()));
		});
	}, []);

	return posts.map((el) => {
		return (
			<Post
				id={v4()}
				username={el.username}
				caption={el.caption}
				imageURL={el.imageUrl}
			/>
		);
	});
};

export default PostList;

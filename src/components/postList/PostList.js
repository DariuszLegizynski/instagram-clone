import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Post from "../post/Post";

// tools
import { v4 } from "uuid";

// config
// import { db } from "../../config/firebase";

// actions
import { postsAction } from "../../store/posts/postsAction";

const PostList = () => {
	// const [posts, setPosts] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(postsAction());
	}, [dispatch]);

	const selectDbPosts = useSelector((state) => state);

	console.log(selectDbPosts);

	// useEffect(() => {
	// 	db.collection("posts").onSnapshot((snapshot) => {
	// 		setPosts(snapshot.docs.map((el) => el.data()));
	// 	});
	// }, []);
	return <div>nothing</div>;
	// return selectDbPosts.map((el) => {
	// 	return (

	// 		<Post
	// 			id={v4()}
	// 			username={el.username}
	// 			caption={el.caption}
	// 			imageURL={el.imageUrl}
	// 		/>
	// 	);
	// });
};

export default PostList;

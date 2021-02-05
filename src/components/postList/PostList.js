import React, { useEffect, useState } from "react";

// components
import Post from "../post/Post";

// tools
import { uuid } from "uuidv4";
import { db } from "../../config/firebase";

const PostList = () => {
	const [posts, setPosts] = useState([
		// {
		// 	username: "DariuszLegizynski",
		// 	caption: "hello master",
		// 	imageURL:
		// 		"https://i.ytimg.com/vi/iosNuIdQoy8/maxresdefault.jpg",
		// },
		// {
		// 	username: "Master",
		// 	caption: "good work",
		// 	imageURL:
		// 		"https://frontendjournal.com/wp-content/uploads/2020/09/Javascript-ES6.jpg",
		// },
		// {
		// 	username: "DariuszLegizynski",
		// 	caption: "I am doing an instagram-clone",
		// 	imageURL: "https://reactjs.org/logo-og.png",
		// },
	]);

	useEffect(() => {
		db.collection("posts").onSnapshot((snapshot) => {
			setPosts(snapshot.docs.map((el) => el.data()));
		});
	}, []);

	return posts.map((el) => {
		return (
			<Post
				id={uuid()}
				username={el.username}
				caption={el.caption}
				imageURL={el.imageUrl}
			/>
		);
	});
};

export default PostList;

import React, { useState } from "react";

// components
import Post from "../post/Post";

const PostList = () => {
	const [posts, setPosts] = useState([
		{
			username: "DariuszLegizynski",
			caption: "hello master",
			imageURL:
				"https://i.ytimg.com/vi/iosNuIdQoy8/maxresdefault.jpg",
		},
		{
			username: "Master",
			caption: "good work",
			imageURL:
				"https://frontendjournal.com/wp-content/uploads/2020/09/Javascript-ES6.jpg",
		},
		{
			username: "DariuszLegizynski",
			caption: "I am doing an instagram-clone",
			imageURL: "https://reactjs.org/logo-og.png",
		},
	]);

	console.log(posts);

	return posts.map((el) => {
		return (
			<Post
				username={el.username}
				caption={el.caption}
				imageURL={el.imageURL}
			/>
		);
	});
};

export default PostList;

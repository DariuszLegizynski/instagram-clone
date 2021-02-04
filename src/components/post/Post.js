import React from "react";

// tools
import Avatar from "@material-ui/core/Avatar";

// styles
import "./Post.css";

const Post = () => {
	return (
		<div className="post">
			<div className="post__header">
				<Avatar
					className="post__avatar"
					alt="username"
					src="/statis/images/avatar/1.jpg"
				/>
				<h3>Username</h3>
			</div>

			<img
				className="post__image"
				src="https://i.ytimg.com/vi/iosNuIdQoy8/maxresdefault.jpg"
				alt="firebaseLogo"
			/>
			<h4 className="post__text">
				<strong>Argens: </strong>am making an instagram
				clone!
			</h4>
		</div>
	);
};

export default Post;

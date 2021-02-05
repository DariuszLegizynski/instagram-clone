import React from "react";

// tools
import Avatar from "@material-ui/core/Avatar";

// styles
import "./Post.css";

const Post = ({ username, caption, imageURL }) => {
	return (
		<div className="post">
			<div className="post__header">
				<Avatar
					className="post__avatar"
					alt="username"
					src="/statis/images/avatar/1.jpg"
				/>
				<h3>{username}</h3>
			</div>

			<img
				className="post__image"
				src={imageURL}
				alt="userFoto"
			/>
			<h4 className="post__text">
				<strong>{username}: </strong>
				{caption}
			</h4>
		</div>
	);
};

export default Post;

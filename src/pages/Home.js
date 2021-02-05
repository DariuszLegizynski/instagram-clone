import React from "react";
import Header from "../components/header/Header";
import PostList from "../components/postList/PostList";

const Home = () => {
	return (
		<section className="home">
			<Header />
			<PostList />
		</section>
	);
};

export default Home;

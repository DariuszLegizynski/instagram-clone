import React from "react";
import { useDispatch } from "react-redux";

// styles
import "./Header.css";

// actions
import { authActionSignUpAnon } from "../../store/auth/authActionSignUpAnon";
import { authActionSignOut } from "../../store/auth/authActionSignOut";

const Header = () => {
	const dispatch = useDispatch();

	const handleSignout = () => {
		dispatch(authActionSignOut());
	};

	return (
		<section className="header">
			<img
				className="header__image"
				src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
				alt="instagram__logo"
			/>
			<button
				onClick={() => dispatch(authActionSignUpAnon())}
			>
				Login
			</button>
			<button onClick={() => handleSignout}>
				Sign Out
			</button>
		</section>
	);
};

export default Header;

import React from "react";
import { useDispatch } from "react-redux";

// styles
import "./Header.css";

// actions
import { authActionSignUpAnon } from "../../store/auth/authActionSignUpAnon";
import { authActionSignOut } from "../../store/auth/authActionSignOut";
import ModalComponent from "../modal/ModalComponent";

const Header = () => {
	const dispatch = useDispatch();

	const handleSignInAnon = () => {
		dispatch(authActionSignUpAnon());
	};

	const signUp = (e) => {
		e.prevent.default();
	};

	const signIn = (e) => {
		e.prevent.default();
	};

	return (
		<section className="header">
			<img
				className="header__image"
				src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
				alt="instagram__logo"
			/>
			{/* <ModalComponent
				buttonText={"Guest Login"}
				chooseAuth={handleSignInAnon}
			/> */}
			<button
				onClick={() => dispatch(authActionSignUpAnon())}
			>
				Guest Login
			</button>
			<button
				onClick={() => dispatch(authActionSignOut())}
			>
				Log Out
			</button>
		</section>
	);
};

export default Header;

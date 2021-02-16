import { useState } from "react";
import { useDispatch } from "react-redux";

// styles
import "./Header.css";

// actions
import { authActionSignUp } from "../../store/auth/authActionSignUp";
import { authActionSignIn } from "../../store/auth/authActionSignIn";
import { authActionSignUpAnon } from "../../store/auth/authActionSignUpAnon";
import { authActionSignOut } from "../../store/auth/authActionSignOut";

// tools
import ModalComponent from "../modal/ModalComponent";

const Header = () => {
	const dispatch = useDispatch();

	const [userSign, setUserSign] = useState({
		email: "",
		password: "",
	});

	const handleSignUp = (e) => {
		e.preventDefault();
		dispatch(authActionSignUp(userSign));
	};

	const handleChange = (e) => {
		const { id, value } = e.target;
		setUserSign({
			...userSign,
			[id]: value,
		});
	};

	const handleSignIn = (e) => {
		e.preventDefault();
		dispatch(authActionSignIn(userSign));
	};

	return (
		<section className="header">
			<img
				className="header__image"
				src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
				alt="instagram__logo"
			/>
			<form className="header__form">
				<input
					className="header__form__search"
					placeholder="search"
				/>
				<button className="header__form__search-btn">
					Search-Icon
				</button>
			</form>
			<div className="header__auth">
				<button
					onClick={() =>
						dispatch(authActionSignUpAnon())
					}
				>
					Guest Login
				</button>
				<ModalComponent
					buttonText={"Login"}
					handleSign={handleSignIn}
					handleChange={handleChange}
				/>
				<ModalComponent
					buttonText={"Sign Up"}
					handleSign={handleSignUp}
					handleChange={handleChange}
				/>
				<button
					onClick={() => dispatch(authActionSignOut())}
				>
					Log Out
				</button>
			</div>
		</section>
	);
};

export default Header;

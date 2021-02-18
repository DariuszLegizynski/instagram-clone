import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// styles
import "./Header.css";
import sprites from "../../resources/icomoon/sprites.svg";

// actions
import { authActionSignUp } from "../../store/auth/authActionSignUp";
import { authActionSignIn } from "../../store/auth/authActionSignIn";
import { authActionSignUpAnon } from "../../store/auth/authActionSignUpAnon";
import { authActionSignOut } from "../../store/auth/authActionSignOut";

// tools
import ModalComponent from "../modal/ModalComponent";
import { Link } from "react-router-dom";

const Header = () => {
	const dispatch = useDispatch();

	const authState = useSelector((state) => state.auth);

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

	const authenticated = () => {
		if (!authState.authenticated) {
			return (
				<>
					<Link to={"/"}>
						<img
							className="header__image"
							src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
							alt="instagram__logo"
						/>
					</Link>
					<button
						className="btn"
						onClick={() =>
							dispatch(authActionSignUpAnon())
						}
					>
						Guest
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
				</>
			);
		} else {
			return (
				<>
					<div className="header__top">
						<Link to={"/"}>
							<use
								href={sprites + "#icon-camera1"}
							/>
						</Link>
						<Link to={"/"}>
							<img
								className="header__image"
								src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
								alt="instagram__logo"
							/>
						</Link>
						<Link to={"/"}>
							<use
								href={sprites + "#icon-compass1"}
							/>
						</Link>
					</div>
					<div className="header__bottom">
						<Link to={"/"}>
							<use
								href={
									sprites +
									"#icon-home-outline"
								}
							/>
						</Link>
						<Link to={"/"}>
							<use
								href={sprites + "#icon-search"}
							/>
						</Link>
						<Link to={"/"}>
							<use
								href={
									sprites +
									"#icon-plus-square-o"
								}
							/>
						</Link>
						<Link to={"/"}>
							<use
								href={sprites + "#icon-heart-o"}
							/>
						</Link>
						<Link to={"/"}>
							<use
								href={
									sprites + "#icon-user-circle"
								}
							/>
						</Link>
					</div>
				</>
			);
		}
	};

	return (
		<section className="header">
			{authenticated()}
			<div className="header__auth">
				<p>{authState.authMsg}</p>
				{authState.authenticated && (
					<button
						className="btn"
						onClick={() =>
							dispatch(authActionSignOut())
						}
					>
						Log Out
					</button>
				)}
			</div>
		</section>
	);
};

export default Header;

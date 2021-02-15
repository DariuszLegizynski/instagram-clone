import { useState } from "react";

// tools
import Modal from "react-modal";

const ModalComponent = ({
	buttonText,
	handleSign,
	handleChange,
}) => {
	Modal.setAppElement("#root");

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	};

	return (
		<div>
			<button onClick={() => setModalIsOpen(true)}>
				{buttonText}
			</button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				style={customStyles}
			>
				<p>{buttonText}</p>
				<form
					className="sign__form"
					onSubmit={handleSign}
				>
					<div className="sign__logIn__wrapper fadeInFromLeft">
						<label
							className="sign__label"
							htmlFor="email"
						>
							Email address
						</label>
						<input
							className="sign__input"
							type="email"
							id="email"
							onChange={handleChange}
							placeholder="Email Address"
							required
						/>
					</div>
					<div className="sign__logIn__wrapper fadeInFromRight">
						<label
							className="sign__label"
							htmlFor="password"
						>
							Your Password
						</label>
						<input
							className="sign__input"
							type="password"
							id="password"
							onChange={handleChange}
							placeholder="Password"
							required
						/>
					</div>
					<button className="sign__btn btn">
						{buttonText}
					</button>
				</form>
				<button onClick={() => setModalIsOpen(false)}>
					Close
				</button>
			</Modal>
		</div>
	);
};

export default ModalComponent;

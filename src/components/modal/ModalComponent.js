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
		<div className="modal">
			<button
				className="btn"
				onClick={() => setModalIsOpen(true)}
			>
				{buttonText}
			</button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				style={customStyles}
			>
				<p>{buttonText}</p>
				<form onSubmit={handleSign}>
					<div>
						<label htmlFor="email">
							Email address
						</label>
						<input
							type="email"
							id="email"
							onChange={handleChange}
							placeholder="Email Address"
							required
						/>
					</div>
					<div>
						<label htmlFor="password">
							Your Password
						</label>
						<input
							type="password"
							id="password"
							onChange={handleChange}
							placeholder="Password"
							required
						/>
					</div>
					<button className="btn">{buttonText}</button>
				</form>
				<button
					className="btn"
					onClick={() => setModalIsOpen(false)}
				>
					Close
				</button>
			</Modal>
		</div>
	);
};

export default ModalComponent;

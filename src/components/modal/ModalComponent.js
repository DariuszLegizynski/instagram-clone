import { useState } from "react";

// tools
import Modal from "react-modal";

const ModalComponent = ({ buttonText, chooseAuth }) => {
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
				<button onClick={() => chooseAuth()}>
					{buttonText}
				</button>
				<button onClick={() => setModalIsOpen(false)}>
					Close
				</button>
			</Modal>
		</div>
	);
};

export default ModalComponent;

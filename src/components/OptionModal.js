import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <div>
        <Modal isOpen={!!props.selectedOption} contentLabel="Example Modal" onRequestClose={props.handleCloseModal}>
            <h1>Modal</h1>
            <p>{props.selectedOption}</p>
            <button onClick={props.handleCloseModal}>Close</button>
        </Modal>
    </div>
)

export default OptionModal;
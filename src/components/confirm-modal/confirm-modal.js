import { Modal } from '../modal/modal';

import './confirm-modal.css';

export const ConfirmModal = ({ open, handleConfirm, handleCancel }) => {
    return (
        <Modal open={open} title="Точно видалити?">
            <div className="buttons-group">
                <button className="confirm-button" onClick={handleConfirm}>Так</button>
                <button className="cancel-button" onClick={handleCancel}>Ні</button>
            </div>
        </Modal>
    );
}
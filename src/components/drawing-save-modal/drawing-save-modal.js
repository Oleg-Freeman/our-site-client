import { Modal } from '../modal/modal';

import './drawing-save-modal.css';

export const DrawingSaveModal = ({ open, name, handleNameChange, handleConfirm, handleCancel }) => {
    return (
        <Modal open={open} title="Новий Малюнок">
            <input
                className="drawing-save-input"
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
            />
            <div className="buttons-group">
                <button className="save-button" onClick={handleConfirm}>Зберегти</button>
                <button className="cancel-button" onClick={handleCancel}>Відміна</button>
            </div>
        </Modal>
    );
}
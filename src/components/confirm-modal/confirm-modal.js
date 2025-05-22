import './confirm-modal.css';
import { useEffect } from 'react';

export const ConfirmModal = ({ open, handleConfirm, handleCancel }) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);


    if (open) {
        return (
            <>
                <div className="confirm-dimmer" />
                <div className="confirm-modal">
                    <h2 className="confirm-header">Точно видалити?</h2>
                    <div className="buttons-group">
                        <button className="confirm-button" onClick={handleConfirm}>Так</button>
                        <button className="cancel-button" onClick={handleCancel}>Ні</button>
                    </div>
                </div>
            </>
        );
    }

    return null;
}
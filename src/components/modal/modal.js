import './modal.css'

export const Modal = ({ open, title, children }) => {
    if (open) {
        return (
            <div className="modal-container">
                <div className="modal-dimmer" />
                <div className="modal">
                    <h2>{title}</h2>
                    {children}
                </div>
            </div>
        );
    }
}
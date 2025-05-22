import './tooltip.css';

export const Tooltip = ({ text, children }) => {
    return (
        <div className="tooltip">
            {children}
            <div className="tooltip-text">{text}</div>
        </div>
    );
}
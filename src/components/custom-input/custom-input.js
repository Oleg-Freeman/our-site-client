import './custom-input.css';

export const CustomInput = ({ text, type, id, value, handleChange, required }) => {
    return (
        <div className="inputGroup field">
            <input
                id={id}
                type={type}
                className="inputField"
                placeholder={text}
                required={required}
                value={value || ''}
                onChange={(e) => handleChange(e.target.value)}
            />
            <label htmlFor={id} className="inputLabel">{text}</label>
        </div>
    )
}
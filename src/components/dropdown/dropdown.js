import './dropdown.css';

export const Dropdown = ({ options = [], value = '', handleChange }) => {
    const handleSelectChange = (event) => {
        handleChange(event.target.value);
    };

    return (
        <select className="dropdown" value={value} onChange={handleSelectChange}>
            <option key="0" value="">Збережені Малюнки</option>
            {options?.length && options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
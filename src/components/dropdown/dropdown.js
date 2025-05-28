import './dropdown.css';

export const Dropdown = ({ options = [], value, handleChange }) => {
    const handleSelectChange = (event) => {
        handleChange(event.target.value);
    };

    return (
        <select value={value} onChange={handleSelectChange}>
            {options?.length ? options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            )) : (<option key="0" value=""></option>)}
        </select>
    );
}
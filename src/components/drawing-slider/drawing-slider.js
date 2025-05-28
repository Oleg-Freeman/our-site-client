import './drawing-slider.css';

export const DrawingSlider = ({ value, onChange }) => {
    return (
        <div className="PB-range-slider-container">
            <input className="PB-range-slider" type="range" min="0" max="100" value={value} onChange={onChange}/>
            <p className="PB-range-slider-value">{value}px</p>
        </div>
    )
}
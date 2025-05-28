import './drawing.css';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useRef, useState } from 'react';
import { DrawingSlider } from '../drawing-slider/drawing-slider';
import { Tooltip } from '../tooltip/tooltip';
import { Dropdown } from '../dropdown/dropdown';
import { ClearIcon, DeleteIcon, EraserIcon, PencilIcon, SaveIcon } from '../../utils';

const styles = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
};

export const Drawing = () => {
    const canvasRef = useRef(null);
    const [strokeColor, setStrokeColor] = useState('#000000');
    const [strokeWidth, setStrokeWidth] = useState(5);
    const [isEraseMode, setIsEraseMode] = useState(false);

    const handleEraserClick = () => {
        setIsEraseMode(true);
        canvasRef.current?.eraseMode(true);
    };

    const handlePenClick = () => {
        setIsEraseMode(false);
        canvasRef.current?.eraseMode(false);
    };


    const handleStrokeWidthChange = (event) => {
        setStrokeWidth(+event.target.value);
    };

    const handleColorChange = (event) => {
        setStrokeColor(event.target.value);
    }

    const handleClearCanvas = () => {
        canvasRef.current?.clearCanvas();
    }

    return (
        <section>
            <h1 className="header">Намалюй мені</h1>
            <div className="drawing-tools">
                <Tooltip text="Колір">
                    <input className="drawing-color-select" type="color" onChange={handleColorChange} />
                </Tooltip>
                <Tooltip text="Олівець">
                    <button
                        className={`drawing-tools-button ${!isEraseMode ? 'drawing-tools-active' : ''}`}
                        onClick={handlePenClick}
                    >
                        <PencilIcon />
                    </button>
                </Tooltip>
                <Tooltip text="Стирачка">
                    <button
                        className={`drawing-tools-button ${isEraseMode ? 'drawing-tools-active' : ''}`}
                        onClick={handleEraserClick}
                    >
                        <EraserIcon />
                    </button>
                </Tooltip>
                <Tooltip text="Розмір">
                    <DrawingSlider value={strokeWidth} onChange={handleStrokeWidthChange} />
                </Tooltip>
                <Tooltip text="Очистити">
                    <button
                        className="drawing-tools-button"
                        onClick={handleClearCanvas}
                    >
                        <ClearIcon />
                    </button>
                </Tooltip>
                <Tooltip text="Зберегти">
                    <button
                        className="drawing-tools-button"
                    >
                        <SaveIcon />
                    </button>
                </Tooltip>
                <Tooltip text="Збережені">
                    <Dropdown />
                </Tooltip>
                <Tooltip text="Видалити">
                    <button
                        className="drawing-tools-button"
                    >
                        <DeleteIcon />
                    </button>
                </Tooltip>
            </div>
            <div className="drawing-container">
                <ReactSketchCanvas
                    ref={canvasRef}
                    style={styles}
                    height="800"
                    strokeWidth={strokeWidth}
                    strokeColor={strokeColor}
                    eraserWidth={strokeWidth}
                />
            </div>
        </section>
    )
}
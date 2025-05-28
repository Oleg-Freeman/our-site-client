import { Tooltip } from '../tooltip/tooltip';
import { ClearIcon, DeleteIcon, EraserIcon, PencilIcon, SaveIcon } from '../../utils';
import { DrawingSlider } from '../drawing-slider/drawing-slider';
import { Dropdown } from '../dropdown/dropdown';

import './drawing-tools.css';

export const DrawingTools = () => {
    return (
        <div className="drawing-tools">
            <Tooltip text="Колір">
                <input
                    className="drawing-color-select"
                    type="color"
                    // onChange={handleColorChange}
                />
            </Tooltip>
            <Tooltip text="Олівець">
                <button
                    className={`drawing-tools-button ${false ? 'drawing-tools-active' : ''}`}
                    // onClick={handlePenClick}
                >
                    <PencilIcon />
                </button>
            </Tooltip>
            <Tooltip text="Стирачка">
                <button
                    className={`drawing-tools-button ${true ? 'drawing-tools-active' : ''}`}
                    // onClick={handleEraserClick}
                >
                    <EraserIcon />
                </button>
            </Tooltip>
            <Tooltip text="Розмір">
                <DrawingSlider
                    value={5}
                    // onChange={handleStrokeWidthChange}
                />
            </Tooltip>
            <Tooltip text="Очистити">
                <button
                    className="drawing-tools-button"
                    // onClick={handleClearCanvas}
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
    )
}
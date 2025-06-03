import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useEffect, useRef, useState } from 'react';
import { DrawingSlider } from '../drawing-slider/drawing-slider';
import { Tooltip } from '../tooltip/tooltip';
import { Dropdown } from '../dropdown/dropdown';
import { ClearIcon, DeleteIcon, EraserIcon, PencilIcon, SaveIcon } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { createDrawing, getDrawingById, getDrawingShortList } from '../../redux/drawings/drawingOperations';
import { DrawingSaveModal } from '../drawing-save-modal/drawing-save-modal';
import { ButtonLoader } from '../button-loader/button-loader';

import './drawing.css';

const styles = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
};

export const Drawing = () => {
    const canvasRef = useRef(null);
    const [strokeColor, setStrokeColor] = useState('#000000');
    const [strokeWidth, setStrokeWidth] = useState(5);
    const [isEraseMode, setIsEraseMode] = useState(false);
    const [drawingSaveModalOpen, setDrawingSaveModalOpen] = useState(false);
    const [drawingName, setDrawingName] = useState('');
    const drawingShortList = useSelector(state => state.drawings.shortList);
    const isLoading = useSelector(state => state.drawings.isLoading);
    const currentDrawing = useSelector(state => state.drawings.currentDrawing);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!drawingShortList) {
            dispatch(getDrawingShortList())
                .then(({ payload = [] }) => {
                    if (payload?.length && payload[0]?._id) {
                        return dispatch(getDrawingById({ id: payload[0]._id }));
                    }
                })
        }

    }, [drawingShortList, dispatch]);

    useEffect(() => {
        if (currentDrawing) {
            canvasRef.current?.loadPaths(currentDrawing.layers || [])
        }
    }, [currentDrawing, dispatch]);

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

    const handleSaveCanvas = () => {
        setDrawingSaveModalOpen(false);
        canvasRef.current?.exportPaths()
            .then(result => dispatch(createDrawing({ name: drawingName, layers: result })))
            .catch(error => console.error(error));
    }

    const handleDrawingNameChange = (event) => {
        setDrawingName(event.target.value);
    }

    return (
        <section>
            <h1 className="header">Намалюй мені</h1>
            <div className="drawing-tools-grid">
                <DrawingSaveModal
                    open={drawingSaveModalOpen}
                    name={drawingName}
                    handleNameChange={handleDrawingNameChange}
                    handleCancel={() => setDrawingSaveModalOpen(false)}
                    handleConfirm={handleSaveCanvas}
                />
                <div className="drawing-tools-row">
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
                            onClick={() => setDrawingSaveModalOpen(true)}
                            disabled={isLoading}
                        >
                            {isLoading ? (<ButtonLoader />) : (<SaveIcon />)}
                        </button>
                    </Tooltip>
                    <Tooltip text="Видалити">
                        <button
                            className="drawing-tools-button"
                        >
                            <DeleteIcon />
                        </button>
                    </Tooltip>
                </div>
                <div className="drawing-tools-row">
                    <Tooltip text="Розмір">
                        <DrawingSlider value={strokeWidth} onChange={handleStrokeWidthChange} />
                    </Tooltip>
                    <Tooltip text="Збережені">
                        <Dropdown />
                    </Tooltip>
                </div>
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
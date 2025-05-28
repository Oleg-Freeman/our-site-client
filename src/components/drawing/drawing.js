import './drawing.css';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useEffect, useRef, useState } from 'react';
import { DrawingSlider } from '../drawing-slider/drawing-slider';
import { Tooltip } from '../tooltip/tooltip';
import { Dropdown } from '../dropdown/dropdown';
import { ClearIcon, DeleteIcon, EraserIcon, PencilIcon, SaveIcon } from '../../utils';
// import { DrawingTools } from '../drawing-tools/drawing-tools';

const styles = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
};

export const Drawing = () => {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState('#000000');
    const [lineOpacity, setLineOpacity] = useState(0.1);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
    }, [lineColor, lineOpacity, lineWidth]);

    const startDrawing = (e) => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        setIsDrawing(true);
    };

    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = (e) => {
        if (!isDrawing) {
            return;
        }
        ctxRef.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );

        ctxRef.current.stroke();
    };

    // const handleEraserClick = () => {
    //     setIsEraseMode(true);
    //     canvasRef.current?.eraseMode(true);
    // };
    //
    // const handlePenClick = () => {
    //     setIsEraseMode(false);
    //     canvasRef.current?.eraseMode(false);
    // };
    //
    //
    // const handleStrokeWidthChange = (event) => {
    //     setStrokeWidth(+event.target.value);
    // };
    //
    // const handleColorChange = (event) => {
    //     setStrokeColor(event.target.value);
    // }
    //
    // const handleClearCanvas = () => {
    //     canvasRef.current?.clearCanvas();
    // }

    return (
        <section className="drawing-container">
            <h1 className="header">Намалюй мені</h1>
            {/*<DrawingTools />*/}
            {/*<div className="drawing-container">*/}
            {/*    <ReactSketchCanvas*/}
            {/*        ref={canvasRef}*/}
            {/*        style={styles}*/}
            {/*        height="800"*/}
            {/*        strokeWidth={strokeWidth}*/}
            {/*        strokeColor={strokeColor}*/}
            {/*        eraserWidth={strokeWidth}*/}
            {/*    />*/}
            {/*</div>*/}
            <canvas
                className="drawing-canvas"
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                ref={canvasRef}
                width={`800px`}
                height={`600px`}
            />
        </section>
    )
}
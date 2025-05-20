import './drawing.css';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const styles = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
};

export const Drawing = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#a01a4f', fontSize: '2rem' }}>Намалюй мені</h1>
            <div style={{ width: '60%', height: '600px', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
                <ReactSketchCanvas
                    style={styles}
                    // width="400"
                    height="800"
                    strokeWidth={5}
                    strokeColor="#000000"
                />
            </div>
        </div>
    )
}
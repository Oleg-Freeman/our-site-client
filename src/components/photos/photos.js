import './photos.css'
import { useState } from 'react';

const photos = [];

export const Photos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // move to the next photo
    // if we are at the end, go to the first photo
    const next = () => {
        setCurrentIndex((currentIndex + 1) % photos.length);
    };

    // move to the previous photo
    // if we are at the beginning, go to the last photo
    const prev = () => {
        setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    };

    return (
        <>
            {/* Render the carousel */}
            <div className='slider-container'>
                {photos.map((photo, index) => (
                    <div
                        key={index}

                        // if the photo is the current photo, show it
                        className={
                            currentIndex === index ? 'fade' : 'slide fade'
                        }
                    >
                        <img src={photo} alt={`Photo_${index}`} className='photo' />
                        <div className='caption'>{`Photo_${index}`}</div>
                    </div>
                ))}

                {/* Previous button */}
                <button onClick={prev} className='prev'>
                    &lt;
                </button>

                {/* Next button */}
                <button onClick={next} className='next'>
                    &gt;
                </button>
            </div>

            {/* Render dots indicator */}
            <div className='dots'>
                {photos.map((photo, index) => (
                    <span
                        key={index}
                        // highlight the dot that corresponds to the current photo
                        className={
                            currentIndex === index ? 'dot active' : 'dot'
                        }
                        // when the user clicks on a dot, go to the corresponding photo
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </>
    );
}
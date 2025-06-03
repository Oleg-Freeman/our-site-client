import './photos.css'
import { useEffect, useState } from 'react';
import { DeleteIcon, DownloadIcon, UploadIcon } from '../../utils';
import { Tooltip } from '../tooltip/tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { loadPhotos, uploadPhotos, downloadPhotos, deletePhoto } from '../../redux/photos/photoOperations';
import { ConfirmModal } from '../confirm-modal/confirm-modal';

export const Photos = () => {
    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const photos = useSelector(state => state.photos.photos);

    useEffect(() => {
        if (!photos) {
            dispatch(loadPhotos());
        }
    }, [dispatch, photos]);

    useEffect(() => {
        if (photos?.length) {
            setCurrentIndex(Math.floor(Math.random() * (photos.length + 1)) || 0);
        }
    }, [photos]);

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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new window.FormData();
            formData.append('photo', file, file.name);
            dispatch(uploadPhotos(formData));
        }
    }

    const handlePhotoDownload = () => {
        dispatch(downloadPhotos({ url: photos[currentIndex]?.url }));
    }

    const handleDeletePhotoClick = () => {
        setConfirmDeleteOpen(true);
    }

    const handleConfirmPhotoDelete = () => {
        dispatch(deletePhoto({ id: photos[currentIndex]?._id }));
        setConfirmDeleteOpen(false);
    }

    const handleCancelPhotoDelete = () => {
        setConfirmDeleteOpen(false);
    }

    return (
        <>
            <ConfirmModal
                open={confirmDeleteOpen}
                handleConfirm={handleConfirmPhotoDelete}
                handleCancel={handleCancelPhotoDelete}
            />
            <div className='slider-container'>
                <div className="btn-panel">
                    <Tooltip text="Скачати">
                        <button className="download-btn" onClick={handlePhotoDownload}>
                            <DownloadIcon />
                        </button>
                    </Tooltip>
                    <Tooltip text="Додати">
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            id="contained-button-file"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="contained-button-file">
                            <div className="download-btn">
                                <UploadIcon />
                            </div>
                        </label>
                    </Tooltip>
                    <Tooltip text="Видалити">
                        <button className="download-btn" onClick={handleDeletePhotoClick}>
                            <DeleteIcon />
                        </button>
                    </Tooltip>
                </div>
                {photos?.map((photo, index) => (
                    <div
                        key={index}

                        // if the photo is the current photo, show it
                        className={
                            currentIndex === index ? 'fade' : 'slide fade'
                        }
                    >
                        <img src={photo.url} alt={`Photo_${index}`} className='photo' />
                    </div>
                ))}
                <button onClick={prev} className='prev'>
                    &lt;
                </button>
                <button onClick={next} className='next'>
                    &gt;
                </button>
            </div>

            {/* Render dots indicator */}
            <div className='dots'>
                {photos?.map((photo, index) => (
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
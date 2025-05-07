import { useRef, useState } from 'react';
import { Wrapper, Menu, Countdown } from '../../components';

import './home.page.css'

export const HomePage = () => {
    const [photos, setPhotos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quote, setQuote] = useState('');
    const [meme, setMeme] = useState(null);
    const fileInputRef = useRef();

    const prev = () => {
        setCurrentIndex((i) => (i - 1 + photos.length) % photos.length);
    };
    const next = () => {
        setCurrentIndex((i) => (i + 1) % photos.length);
    };

    const uploadPhoto = () => {
        const file = fileInputRef.current.files[0];
        if (!file) return;
        const form = new FormData();
        form.append('photo', file);
        fetch('/api/photos', { method: 'POST', body: form })
            .then(res => res.json())
            .then(newPhoto => {
                setPhotos(p => [newPhoto, ...p].slice(0, 10));
                setCurrentIndex(0);
            });
    };

    const deletePhoto = () => {
        const toDelete = photos[currentIndex];
        fetch(`/api/photos/${toDelete.id}`, { method: 'DELETE' })
            .then(() => {
                setPhotos(p => p.filter((_, idx) => idx !== currentIndex));
                setCurrentIndex(0);
            });
    };

    return (
        <Wrapper>
            <Menu/>
            <div className="home-container">
                <Countdown/>

                <section className="carousel-section">
                    <h2>Photo Carousel</h2>
                    <div className="carousel">
                        {photos.length > 0 ? (
                            <img src={photos[currentIndex].url} alt="carousel" className="carousel-img"/>
                        ) : (
                            <div className="empty">No photos</div>
                        )}
                        <button onClick={prev} className="carousel-btn left">‹</button>
                        <button onClick={next} className="carousel-btn right">›</button>
                    </div>
                    <div className="controls">
                        <input type="file" ref={fileInputRef}/>
                        <button onClick={uploadPhoto} className="btn upload">Upload New Photo</button>
                        <button onClick={deletePhoto} className="btn delete">Delete Photo</button>
                    </div>
                </section>

                <section className="quote-section">
                    <h2>Quote of the Day</h2>
                    <blockquote className="quote">“{quote}”</blockquote>
                </section>

                <section className="meme-section">
                    <h2>Meme of the Day</h2>
                    {meme ? <img src={meme.url} alt={meme.title} className="meme-img"/> : <div>Loading...</div>}
                </section>
            </div>
        </Wrapper>
    );
}
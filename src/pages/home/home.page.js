import { useState } from 'react';
import { Wrapper, Menu, Countdown, Photos } from '../../components';

import './home.page.css'

export const HomePage = () => {
    const [quote, setQuote] = useState('');
    const [meme, setMeme] = useState(null);

    return (
        <Wrapper>
            <Menu/>
            <div className="home-container">
                <Countdown/>
                <Photos />
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
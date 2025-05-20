import { useState } from 'react';
import { Wrapper, Menu, Countdown, Photos, Drawing } from '../../components';

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
                    <h1 style={{ textAlign: 'center', color: '#a01a4f', fontSize: '2rem' }}>Комплімент дня</h1>
                    <blockquote className="quote">“З тобою навіть мовчання звучить красиво.”</blockquote>
                </section>
                <section>
                    <Drawing />
                </section>
            </div>
        </Wrapper>
    );
}
import './home.page.css'

import { useState } from 'react';
import { Wrapper, Menu, Countdown, Photos, Drawing, PageLoader } from '../../components';
import { useSelector } from 'react-redux';

export const HomePage = () => {
    const [quote, setQuote] = useState('');
    const isUserLoading = useSelector((state) => state.user.isLoading);

    return (
        <>
            <Menu/>
            <Wrapper>
                {isUserLoading && <PageLoader />}
                <div className="home-container">
                    <Countdown/>
                    <Photos />
                    <section className="quote-section">
                        <h1 className="header">Комплімент дня</h1>
                        <blockquote className="quote">“З тобою навіть мовчання звучить красиво.”</blockquote>
                    </section>
                    <section>
                        <Drawing />
                    </section>
                </div>
            </Wrapper>
        </>
    );
}
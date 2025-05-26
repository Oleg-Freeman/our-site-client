import './home.page.css'

import { Wrapper, Menu, Countdown, Photos, Drawing, PageLoader } from '../../components';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Compliment } from '../../components/compliment/compliment';

export const HomePage = () => {
    const isUserLoading = useSelector((state) => state.user.isLoading);
    const isPhotoLoading = useSelector(state => state.photos.isLoading);
    const isComplimentLoading = useSelector(state => state.compliments.isLoading);
    const isLoading = isUserLoading || isPhotoLoading || isComplimentLoading;

    if (isLoading) {
        return (
            <PageLoader />
        )
    }

    return (
        <>
            <Menu/>
            <Wrapper>
                <ToastContainer />
                <div className="home-container">
                    <Countdown/>
                    <Photos />
                    <Compliment />
                    <section>
                        <Drawing />
                    </section>
                </div>
            </Wrapper>
        </>
    );
}
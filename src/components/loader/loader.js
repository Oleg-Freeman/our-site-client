import './loader.css';
import { useEffect } from 'react';

export const Loader = ({ isLoading }) => {
    if (isLoading) {
        return (
            <div className="loader">
                <div className="dot-spinner">
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                    <div className="dot-spinner__dot"></div>
                </div>
            </div>
        );
    }

    return null;
}

export const PageLoader = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    // TODO: fix loader to be full height

    return (
        <>
            <div className="page-loader-background"></div>
            <div className="page-loader-container">
                <div className="page-loader"></div>
                <br/>
                <span className="page-loader-text">Завантаження...</span>
            </div>
        </>
    )
}
import { useEffect, useState } from 'react';
import { Loader } from '../loader/loader';

import './countdown.css'

const calculateTime = () => {
    const initDate = new Date('2022-05-19');
    const today = new Date();
    const lastYearDiff = today.getTime() - new Date(`${today.getFullYear() - 1}-05-19`).getTime();
    const yearDiff = today.getTime()
    - new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()).getTime();
    const daysInYear = Math.floor(yearDiff / (1000 * 60 * 60 * 24));
    const diff = today.getTime() - initDate.getTime();

    return {
        years: Math.floor(diff / (1000 * 60 * 60 * 24 * daysInYear)),
        months: Math.floor(lastYearDiff / (1000 * 60 * 60 * 24 * 30)),
        weeks: Math.floor(lastYearDiff / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor(lastYearDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
    };
}

export const Countdown = () => {
    const [timeData, setTimeData] = useState({ years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setTimeout(() => {
            setTimeData(calculateTime());
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <div>
            <h1 className="countdown-header">Time Together</h1>
            {!timeData?.years ? (<Loader isLoading={true} />) : (
                <div className="countdown">
                    <div className="countdown-item">
                        <h1>Years</h1>
                        <span>{timeData.years}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Months</h1>
                        <span>{timeData.months}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Weeks</h1>
                        <span>{timeData.weeks}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Days</h1>
                        <span>{timeData.days}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Hours</h1>
                        <span>{timeData.hours}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Minutes</h1>
                        <span>{timeData.minutes}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Seconds</h1>
                        <span>{timeData.seconds}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
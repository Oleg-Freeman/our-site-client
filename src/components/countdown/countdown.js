import { useEffect, useState } from 'react';
import { Loader } from '../loader/loader';

import './countdown.css'

const calculateTime = () => {
    const initDate = new Date('2022-05-19 00:00:00');
    const today = new Date();
    const yearDiff = today.getTime()
    - new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()).getTime();
    const daysInYear = Math.floor(yearDiff / (1000 * 60 * 60 * 24));
    const diff = today.getTime() - initDate.getTime();
    let previousDate;

    if (today.getMonth() + 1 <= 5 && today.getDate() < 19) {
        previousDate = new Date(`${today.getFullYear() - 1}-05-19 00:00:00`);
    } else {
        previousDate = new Date(`${today.getFullYear()}-05-19 00:00:00`)
    }

    const lastYearDiff = today.getTime() - previousDate.getTime();

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
            <h1 className="countdown-header">Час відколи тебе зустрів</h1>
            {!timeData?.years ? (<Loader isLoading={true} />) : (
                <div className="countdown">
                    <div className="countdown-item">
                        <h1>Роки</h1>
                        <span>{timeData.years}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Місяці</h1>
                        <span>{timeData.months}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Тижні</h1>
                        <span>{timeData.weeks}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Дні</h1>
                        <span>{timeData.days}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Години</h1>
                        <span>{timeData.hours}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Хвилини</h1>
                        <span>{timeData.minutes}</span>
                    </div>
                    <div className="countdown-item">
                        <h1>Секунди</h1>
                        <span>{timeData.seconds}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
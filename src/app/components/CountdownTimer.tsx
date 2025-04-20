'use client'

import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date("2025-08-09") - +new Date();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    // Mapping English interval names to French
    const INTERVAL_LABELS_FR: Record<string, string> = {
        days: 'jours',
        hours: 'heures',
        minutes: 'minutes',
        seconds: 'secondes',
    };

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval as keyof TimeLeft]) {
            return null;
        }

        return (
            <span className="text-2xl font-bold mx-2" key={interval}>
                {timeLeft[interval as keyof TimeLeft]} {INTERVAL_LABELS_FR[interval] || interval}{' '}
            </span>
        );
    });

    return (
        <div className="text-center my-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-serif mb-4">Compte à rebours avant notre grand jour:</h2>
            {timerComponents.length ? timerComponents : <span>Wedding time!</span>}
        </div>
    );
};

export default CountdownTimer;
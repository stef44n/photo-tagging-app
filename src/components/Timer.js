import React, { useState, useEffect } from "react";

const Timer = ({ isTimerRunning }) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval;

        if (isTimerRunning) {
            interval = setInterval(() => {
                if (seconds < 59) {
                    setSeconds(seconds + 1);
                } else {
                    setMinutes(minutes + 1);
                    setSeconds(0);
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [minutes, seconds, isTimerRunning]);

    return (
        <p>
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
        </p>
    );
};

export default Timer;

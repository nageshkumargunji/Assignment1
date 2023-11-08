import React, { useState, useEffect } from "react";
import "./time.css";

function Timer(){
  const [workTime, setWorkTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [timeRemaining, setTimeRemaining] = useState(workTime);
  const [isWorking, setIsWorking] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      if (isWorking) {
        setIsWorking(false);
        setTimeRemaining(breakTime);
      } else {
        setIsWorking(true);
        setTimeRemaining(workTime);
      }
    }

    return () => clearInterval(timer);

  }, [isRunning, timeRemaining, workTime, breakTime, isWorking]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsWorking(true);
    setTimeRemaining(workTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="timer-container">
      <h1 className="timer-heading">{isWorking ? "Work Timer" : "Break Timer"}</h1>
      <p className="timer-time">{formatTime(timeRemaining)}</p>
      <div>
        <button className="timer-button bg-teal-500 text-white" onClick={startTimer}>
          Start
        </button>
        <button className="timer-button bg-red-500 text-white" onClick={pauseTimer}>
          Pause
        </button>
        <button className="timer-button bg-blue-500 text-white" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;

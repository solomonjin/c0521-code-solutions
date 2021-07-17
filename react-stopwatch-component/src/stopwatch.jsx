import React, { useState } from 'react';

function Stopwatch(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(null);
  const [count, setCount] = useState(0);

  const togglePlay = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    } else {
      setTimer(setInterval(() => setCount(count => count + 1), 1000));
    }
    setIsPlaying(!isPlaying);
  };

  const clickTimer = () => {
    if (isPlaying) return;

    setCount(0);
  };

  return (
    <div className="row">
      <div className="timer" onClick={clickTimer}>
        <span>{count}</span>
      </div>
      <i onClick={togglePlay} className={isPlaying ? 'fas fa-pause' : 'fas fa-play'} />
    </div>
  );
}
export { Stopwatch };

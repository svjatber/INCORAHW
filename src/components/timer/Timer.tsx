import React, { useEffect, useState } from 'react';

interface ITimer {
  time: number;
  autostart?: boolean;
  onTick?: () => void;
  step: number;
  onTimeEnd?: () => void;
  onTimeStart?: () => void;
  onTimePause?: () => void;
}

export const Timer = (props: ITimer) => {
  const { time, autostart, onTick, step, onTimeEnd, onTimeStart, onTimePause } = props;

  const [timer, setTimer] = useState<number>(time);
  const [stepLocal, setStepLocal] = useState<number>(step);
  const [checkWorkTimer, setCheckWorkTimer] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const onTickLocal = () => {
    if (onTick) {
      onTick();
    }
    let interval = setTimeout(() => {
      if (timer === 0) {
        setCheckWorkTimer(false);
        if (onTimeEnd) {
          onTimeEnd();
        }
        clearTimeout(interval);
      } else {
        setCount(count + 1);
        setTimer(timer - stepLocal / 1000);
      }
    }, step);
  };

  const onTimeStartLocal = () => {
    if (timer === 0) {
      setTimer(time);
      setCount(0);
    }
    setCheckWorkTimer(true);
    if (onTimeStart) {
      onTimeStart();
    }
  };

  const onTimePauseLocal = () => {
    setCheckWorkTimer(false);
    if (onTimePause) {
      onTimePause();
    }
  };

  useEffect(() => {
    if (checkWorkTimer) {
      onTickLocal();
    }
  });

  useEffect(() => {
    if (autostart) {
      setCheckWorkTimer(true);
    }
  }, []);

  const wid = 1000 / (time / (step / 1000));
  return (
    <div>
      {!checkWorkTimer ? (
        <button onClick={onTimeStartLocal}>Start</button>
      ) : (
        <button onClick={onTimePauseLocal}>Pause</button>
      )}
      <div>{timer}</div>
      <div style={{ backgroundColor: 'red', width: 1000 - wid * count, height: '30px' }}> </div>
    </div>
  );
};

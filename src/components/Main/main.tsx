import React, { useEffect, useMemo, useState } from 'react';
import { Timer } from '../timer/Timer';

export const Main = (): any => {
  const onTimeEnd = () => {
    console.log('timer finish');
  };

  const onTimeStart = () => {
    console.log('timer start');
  };

  const onTimePause = () => {
    console.log('timer is paused');
  };

  const onTick = () => {
    console.log('timer work');
  };

  return (
    <div>
      <Timer
        time={60}
        step={500}
        autostart={false}
        onTimeEnd={onTimeEnd}
        onTimeStart={onTimeStart}
        onTimePause={onTimePause}
        onTick={onTick}
      />
    </div>
  );
};

import React from 'react';

export const WeatherBlock = ({ main, wind }: any) => {
  return (
    <>
      <div>
        <span> Температура: {main.temp} C </span>
        <span> Вологість: {main.humidity}% </span>
      </div>
      <div>
        <span> Тиск: {main.pressure}гПа </span>
        <span> Швидкість вітру: {wind.speed}м\с</span>
      </div>
    </>
  );
};

'use client';

import { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const formatTime = (time: number) => time.toString().padStart(2, '0');

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex items-center gap-1">
      <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-[13px] font-bold text-primary shadow-sm">
        {formatTime(timeLeft.hours)}
      </div>
      <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-[13px] font-bold text-primary shadow-sm">
        {formatTime(timeLeft.minutes)}
      </div>
      <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-[13px] font-bold text-primary shadow-sm">
        {formatTime(timeLeft.seconds)}
      </div>
    </div>
  );
}

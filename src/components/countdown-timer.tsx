'use client';

import { useState, useEffect } from 'react';

const calculateTimeLeft = (targetDate: Date) => {
  // `new Date()` será diferente no servidor e no cliente, causando a divergência.
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
  // Inicializa o estado como nulo no servidor para evitar a divergência de hidratação.
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number; } | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Este `useEffect` é executado apenas no cliente.
    setIsClient(true);
    
    // Define o tempo inicial no cliente.
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado.
    return () => clearInterval(timer);
  }, [targetDate]);

  // Se não estiver no cliente ou se o tempo restante ainda não foi calculado,
  // renderiza um estado de carregamento.
  if (!isClient || !timeLeft) {
    return (
      <div className="flex items-center gap-1">
        <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-[13px] font-bold text-primary shadow-sm">
          --
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-[13px] font-bold text-primary shadow-sm">
          --
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-[13px] font-bold text-primary shadow-sm">
          --
        </div>
      </div>
    );
  }

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

'use client';

import { useState } from 'react';
import { CountdownTimer } from './countdown-timer';

export function ProductInfo() {
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setHours(date.getHours() + 8);
    date.setMinutes(date.getMinutes() + 2);
    date.setSeconds(date.getSeconds() + 0);
    return date;
  });

  return (
    <div className="w-full bg-primary">
      <div className="flex items-center justify-between px-4 py-4">
        <div>
          <div className="mb-1 flex items-baseline">
            <h2 className="text-[15px] text-white">
              <strike className="opacity-80">R$ 331,90</strike>
            </h2>
            <span className="ml-1.5 inline-flex items-center rounded-sm bg-accent px-1 py-0.5 align-middle text-[14px] font-bold text-primary">
              -<strong>60%</strong>
            </span>
          </div>
          <div>
            <h2 className="font-headline flex items-baseline leading-none text-white">
              <span className="mr-0.5 text-[18px]">R$</span>
              <span className="text-[42px] tracking-tight">189,90</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="mb-2">
            
          </div>
          <div className="text-[12px] font-medium text-white opacity-90">
            <p>1.871 Vendidos</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
        <div>
          <h2 className="text-[14px] text-white">
            Em até <strong className="font-semibold">12x R$8,97</strong>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[10px] font-bold text-white">
            <p>TERMINA EM:</p>
          </div>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </div>
  );
}

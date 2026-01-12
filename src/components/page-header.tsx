

export function PageHeader() {
  return (
    <header className="sticky top-0 z-20">
      <div className="bg-shopee-gradient flex w-full items-center justify-between gap-3 p-3">
        <div className="w-[110px] flex-shrink-0">
          <img
            alt="Shopee"
            width="110"
            height="38"
            className="w-full invert brightness-0"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg"
          />
        </div>
        <div className="flex-1 rounded-sm border border-white/40 p-1 text-center text-white flex flex-col items-center leading-tight">
          <span className="text-[9px] font-bold uppercase tracking-tight opacity-90">
            1500 CUPONS DISPONÍVEIS
          </span>
          <div className="flex items-center gap-1.5">
            <h3 className="font-headline text-xs font-black italic animate-pulse text-shopee-cyan">
              DAY WEEK
            </h3>
            <span className="text-[10px] font-bold opacity-50">|</span>
            <h5 className="text-[10px] font-bold">50% OFF</h5>
          </div>
        </div>
      </div>
    </header>
  );
}

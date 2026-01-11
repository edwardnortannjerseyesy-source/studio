'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const images = [
  { src: 'https://i.imgur.com/ZdRLuAO.png', alt: 'Produto 1' },
  { src: 'https://i.imgur.com/7mWZRWy.png', alt: 'Produto 2' },
  { src: 'https://i.imgur.com/3nLjNCV.jpeg', alt: 'Produto 3' },
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(images.length - 1);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section>
      <div className="group relative aspect-square w-full overflow-hidden bg-white">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative h-full w-full flex-shrink-0">
              <Image
                alt={image.alt}
                src={image.src}
                fill
                className="object-cover"
                sizes="(max-width: 500px) 100vw, 500px"
                priority={index === 0}
                loading={index === 0 ? undefined : 'lazy'}
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 z-10 rounded-full bg-black/40 px-2 py-0.5 text-[12px] font-medium text-white backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/50 text-primary shadow-lg transition-all hover:bg-white active:scale-90"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={3} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/50 text-primary shadow-lg transition-all hover:bg-white active:scale-90"
          aria-label="Próximo"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={3} />
        </button>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'h-1.5 cursor-pointer rounded-full transition-all duration-300',
                currentIndex === index ? 'w-4 bg-primary' : 'w-1.5 bg-white/70'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

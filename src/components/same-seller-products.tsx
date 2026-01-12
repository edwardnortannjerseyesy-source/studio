'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';

const products = [
  {
    name: 'Cooler Igloo Ecocool 85L Caixa Térmica com Rodas e Trava Reforçada Caixa Termica',
    price: '139,89',
    originalPrice: '299,99',
    sold: '',
    discount: '-53%',
    image: 'https://i.imgur.com/VT0ZcoI.jpeg',
    rating: null,
    promoIcon:
      'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    link: 'https://www.seguropagamentos.com.br/Cooler-igloo',
  },
  {
    name: 'Caixa Térmica Cooler Latitude 30 Cinza 28 Lts Igloo Coleman',
    price: '129,90',
    originalPrice: '279,00',
    sold: '154 vendidos',
    discount: '-53%',
    image: 'https://i.imgur.com/Ip5fPaO.jpeg',
    rating: '4.9',
    promoIcon:
      'https://down-br.img.susercontent.com/file/id-11134258-81ztc-me3yjy0bgg02c5',
    link: 'https://www.seguropagamentos.com.br/Cooler-Latitude',
  },
  {
    name: 'CAIXA TÉRMICA IGLOO 56L AZUL COM RODAS IGLOO',
    price: '119,99',
    originalPrice: '269,99',
    sold: '',
    discount: '-56%',
    image: 'https://i.imgur.com/KeAL2If.jpeg',
    rating: null,
    promoIcon:
      'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
    link: 'https://www.seguropagamentos.com.br/Igloo-56L',
  },
  {
    name: 'Caixa Cooler Térmico Branco Marine Ultra Igloo 51 Litros Até 76 Latas Resistente Barco Pesca',
    price: '129,99',
    originalPrice: '289,99',
    sold: '225 vendidos',
    discount: '-55%',
    image: 'https://i.imgur.com/xX8fm4W.jpeg',
    rating: '4.9',
    promoIcon:
      'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    link: 'https://www.seguropagamentos.com.br/caixa-branca',
  },
];

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <a
      href={product.link}
      className="flex h-full flex-col overflow-hidden rounded-sm border border-gray-200 bg-white transition-shadow duration-100 hover:shadow-lg"
    >
      <div className="relative w-full pt-[100%]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="pointer-events-none absolute inset-0 h-full w-full object-contain"
          sizes="(max-width: 500px) 50vw, 200px"
        />
        {product.discount && (
          <div className="absolute right-0 top-0 z-10 rounded-bl-md bg-accent px-1 py-0.5 text-xs font-medium text-primary">
            {product.discount}
          </div>
        )}
        <Image
          src="https://down-br.img.susercontent.com/file/br-11134258-7r98o-mbqsb4pezeqh51"
          alt="Overlay"
          width={180}
          height={40}
          className="absolute bottom-0 left-0 z-10 w-full"
        />
        {product.hasVideo && (
          <div
            className="absolute bottom-1 right-1 z-20 h-5 w-5"
            style={{
              backgroundImage: `url('https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/43bd6a890841685e2fea.svg')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-2">
        <div>
          <p className="mb-1 break-words text-xs">
            {product.promoIcon && (
              <Image
                src={product.promoIcon}
                alt="promo"
                width={14}
                height={14}
                className="mr-0.5 mb-0.5 inline-block h-[14px]"
              />
            )}
            {product.name}
          </p>
          {product.rating && (
            <div className="mb-2 flex w-fit items-center gap-1 rounded-[1px] border-[0.5px] border-amber-400 bg-amber-50 px-1 py-[1px] text-xs">
              <Image
                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg"
                alt="rating icon"
                width={8}
                height={8}
              />
              <span className="text-xs">{product.rating}</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between space-x-1">
          <div className="flex flex-col font-medium text-primary">
            {product.originalPrice && (
              <span className="text-xs text-gray-500 line-through">
                R${product.originalPrice}
              </span>
            )}
            <div className="flex items-baseline">
              <span className="mr-px text-xs">R$</span>
              <span className="text-base leading-5">{product.price}</span>
            </div>
          </div>
          {product.sold && (
            <div className="ml-auto flex-shrink-0 truncate self-end text-xs text-gray-500">
              {product.sold}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

export function SameSellerProducts() {
  return (
    <div className="mt-2 border-t border-gray-100 bg-gray-50 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-700">
          Produtos do mesmo vendedor
        </h2>
        <a
          href="#"
          className="flex items-center text-sm text-primary hover:underline"
        >
          Ver tudo <ChevronRight className="h-4 w-4" />
        </a>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-3 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute -right-3 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}

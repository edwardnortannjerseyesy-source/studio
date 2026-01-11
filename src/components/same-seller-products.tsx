
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
    name: 'Trator Cortador de Grama Dirigivel a Gasolina 7,5L 14,5HP OM 99 L/14.5 K 7,5L Oleo Mac',
    price: '15.699,99',
    sold: '',
    discount: '-24%',
    image: 'https://i.imgur.com/VT0ZcoI.jpeg',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
  },
  {
    name: 'Motor Estacionário Gasolina 7cv 4 Tempo Partida Manual Zmax',
    price: '599,99',
    sold: '154 vendidos',
    discount: '-40%',
    image: 'https://i.imgur.com/Ip5fPaO.jpeg',
    rating: '4.9',
    promoIcon: 'https://down-br.img.susercontent.com/file/id-11134258-81ztc-me3yjy0bgg02c5',
  },
  {
    name: 'Microtrator Diesel Toyama TDWT80E 16.5HP Refrigeração a Água Partida Elétrica Manual 6 Marchas',
    price: '19.999,00',
    sold: '',
    discount: '-17%',
    image: 'https://i.imgur.com/KeAL2If.jpeg',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
  },
  {
    name: 'Painel Plafon Redondo Sobrepor Luz Branco Frio 6500k Bivolt 24w Gesso Sanca',
    price: '17,99',
    sold: '225 vendidos',
    discount: '-57%',
    image: 'https://i.imgur.com/xX8fm4W.jpeg',
    rating: '4.9',
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
  },
  {
    name: 'Trator A Gasolina Partida Elétrica Carro Cortador De Grama Automático Tgh 175 Vonder',
    price: '25.899,00',
    sold: '',
    discount: '-10%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-824i4-mehm1r244l536d_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
  },
  {
    name: 'Aparelho Maquina Inversor Solda 130a Bivolt 127/220v Digital',
    price: '399,90',
    sold: '1mil+ vendidos',
    discount: '-33%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-824i1-mfcq6rdr0r2g1d_tn.webp',
    rating: '4.9',
    promoIcon: 'https://down-br.img.susercontent.com/file/id-11134258-81ztc-me3yjy0bgg02c5',
  },
   {
    name: 'Betoneira Elétrica Grande 400 Litros Construção Motor 2cv Monofásico Com Rodas CMS',
    price: '4.299,00',
    sold: '2 vendidos',
    discount: '-14%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-7rdyf-mckz873up0zgfb_tn.webp',
    rating: '5.0',
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
  },
  {
    name: 'Arame de Solda Mig com Uso de Gás Carretel de Plástico 15kg Espessura 0,8mm ou 1,0mm Erbmaquinas',
    price: '199,00',
    sold: '134 vendidos',
    discount: '-20%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-824ji-mdvsan403k00a8_tn.webp',
    rating: '4.9',
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
  },
];

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <a href="#" className="flex h-full flex-col overflow-hidden rounded-sm border border-gray-200 bg-white transition-shadow duration-100 hover:shadow-lg">
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
        <p className="mb-1 min-h-[2.5rem] break-words text-xs line-clamp-2">
          {product.promoIcon && (
            <Image src={product.promoIcon} alt="promo" width={14} height={14} className="mr-0.5 mb-0.5 inline-block h-[14px]" />
          )}
          {product.name}
        </p>
        {product.rating && (
            <div className='mb-2 flex items-center gap-1 rounded-[1px] border-[0.5px] border-amber-400 bg-amber-50 px-1 py-[1px] text-xs w-fit'>
                <Image src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/d7099d3fd1dfdaf705ab.svg" alt="rating icon" width={8} height={8} />
                <span className='text-xs'>{product.rating}</span>
            </div>
        )}
        <div className="flex items-center justify-between space-x-1">
          <div className="flex items-baseline font-medium text-primary">
            <span className="mr-px text-xs">R$</span>
            <span className="text-base leading-5">{product.price}</span>
          </div>
          {product.sold && (
            <div className="ml-auto flex-shrink-1 truncate text-xs text-gray-500">
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
        <a href="#" className="flex items-center text-sm text-primary hover:underline">
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

const moreProducts = [
  {
    name: 'Carreta Basculante para Trator Cortador de Grama 300kg Estrutura Aço Caçamba Preta',
    price: '1.899,00',
    sold: '2 vendidos',
    discount: '-8%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-824jl-me4r0lvtc3yd9f_tn.webp',
    rating: '5.0',
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
  },
  {
    name: 'Pistola de Pintura Profissional Ar Direto 600ml 36psi Com 2 Bicos de Pintura 1,2mm Compressor Tufão',
    price: '41,99',
    sold: '844 vendidos',
    discount: '-40%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-7rdwx-lz268rzf69dz3c_tn.webp',
    rating: '4.9',
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
  },
  {
    name: 'Painel de LED Avant Luz Neutra 18W Bivolt Quadrado 19cm Instalação Sobrepor Iluminação Geral',
    price: '29,99',
    sold: '',
    discount: null,
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-82621-mja6rpzvnll27c_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
  },
  {
    name: 'Kit 9 Painel de LED POP Luz Neutra Bivolt Avant 29cm 24W Instalçao Embutir Iluminação Geral',
    price: '198,00',
    sold: '',
    discount: '-10%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-8262h-mj5lgyjsie4iec_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
  },
  {
    name: 'Kit 7 Painel de LED Quadrado 28cm Avant Embutido 24W Luz Amarela Bivolt Iluminação Geral',
    price: '153,00',
    sold: '',
    discount: '-10%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-82621-mj8h26slff9f23_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
  },
  {
    name: 'Kit 8 Painel de LED POP Luz Neutra Bivolt Avant 29cm 24W Instalçao Embutir Iluminação Geral',
    price: '179,00',
    sold: '',
    discount: '-10%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-82618-mj5l2376pekg33_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
  },
  {
    name: 'Kit 2 Painel de LED POP Luz Neutra Bivolt Avant 29cm 24W Instalçao Embutir Iluminação Geral',
    price: '54,00',
    sold: '',
    discount: '-10%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-82631-mj8ffty1z75y5f_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
  },
  {
    name: 'Kit 20 Painel de LED POP Luz Neutra Bivolt Avant 29cm 24W Instalçao Embutir Iluminação Geral',
    price: '399,00',
    sold: '',
    discount: '-13%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-82612-mj8fgcap4feo9e_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
  },
  {
    name: 'Adega Climatizada Para 18 Garrafas Iluminação Led Porta de Vidro PAD18I Philco',
    price: '1.709,00',
    sold: '',
    discount: '-10%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-824hj-mehcrvmnf5dwc1_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
  },
  {
    name: 'Painel de LED POP Quadrado 28cm Avant Luz Amarela 24W Bivolt Instalção Embutir',
    price: '36,00',
    sold: '',
    discount: '-10%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-8262a-mjaxaxjv12wy42_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
  },
  {
    name: 'Kit Iluminação 6 Painel de LED Slim Quadrado Avant 30W de Luz Branca Bivolt Iluminação Geral',
    price: '499,00',
    sold: '',
    discount: '-12%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-8261b-mjaxelqkw8p1be_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
  },
  {
    name: 'Esquadro Magnético Capacidade 30Kg EM-9030 Soldador Super Tork',
    price: '28,10',
    sold: '576 vendidos',
    discount: '-22%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-7rbk9-llb8fjufbu0c26_tn.webp',
    rating: '4.8',
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
  },
  {
    name: 'Grampeador Pneumático Profissional 6mm A 16mm 80/16 Pdr',
    price: '369,90',
    sold: '1 vendidos',
    discount: '-5%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-7rceu-lt2fdwmnv6kcf5_tn.webp',
    rating: '5.0',
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
  },
  {
    name: 'Painel de LED Avant Instalção Sobrepor Quadrado 40cm Luz Branca 30W Bivolt Iluminação Geral',
    price: '99,00',
    sold: '',
    discount: '-10%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-82610-mj7dh6zu4c1u40_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
  },
  {
    name: 'Kit 5 Painel de LED Quadrado 28cm Avant Embutido 24W Luz Amarela Bivolt Iluminação Geral',
    price: '108,00',
    sold: '',
    discount: '-10%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-8260g-mj8ftmdgl3b586_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
  },
  {
    name: 'Kit 6 Painel de LED Quadrado 28cm Avant Embutido 24W Luz Amarela Bivolt Iluminação Geral',
    price: '126,00',
    sold: '',
    discount: '-10%',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-8260f-mj8gtjamabr999_tn.webp',
    rating: null,
    promoIcon: 'https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.1.94/pc/34f1ca8d6f23d7d43c17.png',
    hasVideo: true,
  },
];

export function MoreProducts() {
    return (
        <div className="mt-2 border-t border-gray-100 bg-gray-50 p-4">
        <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-700">
            Produtos do mesmo vendedor
            </h2>
            <a href="#" className="flex items-center text-sm text-primary hover:underline">
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
            {moreProducts.map((product, index) => (
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
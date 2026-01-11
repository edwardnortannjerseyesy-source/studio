import {
  ChevronRight,
  MessageCircle,
  Star,
  ThumbsUp,
  User,
} from 'lucide-react';
import Image from 'next/image';

function DetailRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 items-center py-3 text-sm">
      <h3 className="text-gray-500">{label}</h3>
      <div className="col-span-2">{children}</div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="flex flex-wrap items-center gap-1 text-primary">
      <a href="#" className="hover:underline">
        Shopee
      </a>
      <ChevronRight className="h-3 w-3" />
      <a href="#" className="hover:underline">
        Esportes e Lazer
      </a>
      <ChevronRight className="h-3 w-3" />
      <a href="#" className="hover:underline">
        Equipamentos Esportivos e Recreação ao Ar Livre
      </a>
    </div>
  );
}

function StarRating({ rating, size = 'sm' }: { rating: number, size?: 'sm' | 'md' }) {
    const starSize = size === 'sm' ? 'h-3 w-3' : 'h-4 w-4';
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${
            i < rating ? 'text-primary fill-primary' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function ProductDetails() {
  return (
    <div className="mt-2 bg-white">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Detalhes do Produto
        </h2>
        <div className="divide-y divide-gray-100">
          <DetailRow label="Categoria">
            <Breadcrumb />
          </DetailRow>
          <DetailRow label="Estoque">
            <p>2</p>
          </DetailRow>
          <DetailRow label="Marca">
            <a href="#" className="text-primary hover:underline">
              IGLOO
            </a>
          </DetailRow>
          <DetailRow label="Produto personalizado">
            <p>Não</p>
          </DetailRow>
          <DetailRow label="Capacidade de Volume">
            <p>66L</p>
          </DetailRow>
          <DetailRow label="Quantidade">
            <p>1</p>
          </DetailRow>
          <DetailRow label="Envio de">
            <p>Paraná</p>
          </DetailRow>
        </div>
      </div>

      <div className="mt-2 border-t border-gray-100 p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Descrição do produto
        </h2>
        <div className="mt-2 space-y-4 text-sm text-gray-700">
          <Image
            src="https://down-br.img.susercontent.com/file/br-11134208-7r98o-mbi603hcn1bsdd"
            alt="Product image 1"
            width={875}
            height={875}
            className="h-auto w-full"
          />
          <Image
            src="https://down-br.img.susercontent.com/file/br-11134208-7r98o-mbi603hcofw8fb"
            alt="Product image 2"
            width={875}
            height={875}
            className="h-auto w-full"
          />
          <Image
            src="https://down-br.img.susercontent.com/file/br-11134208-7r98o-mbi603hcpugo35"
            alt="Product image 3"
            width={875}
            height={875}
            className="h-auto w-full"
          />
          <Image
            src="https://down-br.img.susercontent.com/file/br-11134208-7r98o-mbi603hcr914a9"
            alt="Product image 4"
            width={875}
            height={875}
            className="h-auto w-full"
          />
          <p>
            Com a Trailmate, nada atrapalha a diversão. Caixa Térmica pronta
            para tudo, para que ela role por terrenos acidentados como se
            estivesse em uma trilha pavimentada.
          </p>
          <p>
            Ela vem com vários recursos úteis: rodas todo-terreno suaves, alça
            telescópica, isolamento THERMECOOL™, abridores de garrafas,
            compartimentos de armazenamento e muito mais!
          </p>
          <p>
            Para que você possa chegar facilmente ao seu destino e manter seus
            produtos gelados durante toda a aventura.
          </p>
          <p>
            Isomento MaxCold tampa e corpo com isolamento de espuma fornecem
            até 4 dias de retenção de gelo.
          </p>
          <p>
            Alça telescópica de travamento horizontal Glide, reduz o esforço em
            50%
          </p>
          <p>
            Armazenamento com trava, resistente à água e vedação anti-vazamento.
          </p>
          <p>
            Abridores de garrafa embutidos dos dois lados, facilitam o consumo
            de bebidas.
          </p>
          <p>
            Bandeja de mordomo utiliza a alça telescópica para servir lanches e
            bebidas.
          </p>
          <p>Possui bolso de armazenamento externo</p>
          <p>
            Cooler com drenagem de água rosqueado é compatível com mangueira de
            jardim e possui tampa amarrada antiaderrapante e fácil de segurar.
          </p>
          <p className="font-bold">Informações Técnicas:</p>
          <p>Cor: Cinza</p>
          <p>Medidas Aproximadas: 88x50x60cm</p>
          <p>Medidas com Haste Aberta: 124cm (Aproximado)</p>
          <p>Capacidade: 112 Latas</p>
          <p>Medida da Roda: 10 Polegadas</p>
          <p>Porta Copo: Até 6</p>
          <p>Peso Aproximado: 12kg</p>
        </div>
      </div>
      <div className="mt-2 border-t border-gray-100 p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Avaliações do produto
        </h2>
        <div className="mt-3 rounded-md border border-primary/20 bg-primary/5 p-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">5.0</span>
            <span className="text-gray-600">de 5</span>
            <StarRating rating={5} size="md"/>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <button className="rounded-sm bg-primary px-3 py-1 text-white">
              Tudo
            </button>
            <button className="rounded-sm border border-primary/50 bg-white px-3 py-1 text-primary">
              5 estrela (2)
            </button>
            <button className="rounded-sm border border-primary/50 bg-white px-3 py-1 text-primary">
              com comentários (1)
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-4 divide-y divide-gray-100">
          <div className="flex gap-3 pt-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
              <User className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">eduardosetubal734</p>
              <div className="my-1">
                <StarRating rating={5} />
              </div>
              <p className="text-xs text-gray-500">2025-09-18 18:01</p>
              <p className="mt-2 text-sm text-gray-800">
                Idêntico à imagem! Excelente!
              </p>
              <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                <button className="flex items-center gap-1 hover:text-primary">
                  <ThumbsUp className="h-4 w-4" />
                  <span>5</span>
                </button>
                <button className="flex items-center gap-1 hover:text-primary">
                  <MessageCircle className="h-4 w-4" />
                  <span>Reportar comentário</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
              <User className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">4foiu1ny05</p>
              <div className="my-1">
                <StarRating rating={5} />
              </div>
              <p className="text-xs text-gray-500">2025-10-23 18:14</p>
              <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                <button className="flex items-center gap-1 hover:text-primary">
                  <ThumbsUp className="h-4 w-4" />
                  <span>1</span>
                </button>
                <button className="flex items-center gap-1 hover:text-primary">
                  <MessageCircle className="h-4 w-4" />
                  <span>Reportar comentário</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

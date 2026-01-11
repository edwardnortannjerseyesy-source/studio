import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CallToActions() {
  return (
    <footer className="sticky bottom-0 z-10 grid grid-cols-5 bg-white shadow-[0_-2px_5px_rgba(0,0,0,0.05)]">
        <Button 
            variant="ghost" 
            className="col-span-2 flex h-14 items-center justify-center gap-1 rounded-none border-r border-primary/20 bg-primary/10 text-primary hover:bg-primary/20"
        >
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs font-medium">Carrinho</span>
        </Button>
        <Button 
            variant="default" 
            className="col-span-3 h-14 rounded-none text-base font-medium"
        >
            Comprar Agora
        </Button>
    </footer>
  );
}

import { PageHeader } from '@/components/page-header';
import { ImageCarousel } from '@/components/image-carousel';
import { ProductInfo } from '@/components/product-info';
import { CallToActions } from '@/components/call-to-actions';

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-sm flex-col bg-white shadow-lg">
      <PageHeader />
      <main className="flex-1">
        <ImageCarousel />
        <ProductInfo />
      </main>
      <CallToActions />
    </div>
  );
}

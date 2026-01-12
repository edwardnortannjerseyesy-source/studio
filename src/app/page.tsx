import { PageHeader } from '@/components/page-header';
import { ImageCarousel } from '@/components/image-carousel';
import { ProductInfo } from '@/components/product-info';
import { ProductDetails } from '@/components/product-details';
import { CallToActions } from '@/components/call-to-actions';
import { SameSellerProducts } from '@/components/same-seller-products';

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-sm flex-col bg-white shadow-lg">
      <PageHeader />
      <main className="flex-1 bg-gray-100">
        <ImageCarousel />
        <ProductInfo />
        <ProductDetails />
        <SameSellerProducts />
      </main>
      <CallToActions />
    </div>
  );
}

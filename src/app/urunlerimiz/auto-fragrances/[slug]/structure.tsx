'use client';

import { Header } from './sections/header';
import { Details } from './sections/details';
import { ProductDetail } from '@/lib/products-data';

interface StructureProps {
  product: ProductDetail;
}

/**
 * Auto Fragrances detail Page Structure Component
 */
export function Structure({ product }: StructureProps) {
  return (
    <>
      <Header product={product} />
      <Details product={product} />
    </>
  );
}

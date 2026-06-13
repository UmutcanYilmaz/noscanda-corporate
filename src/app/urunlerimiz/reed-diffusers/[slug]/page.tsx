import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS_DETAILS } from '@/lib/products-data';
import { Structure } from './structure';

export const dynamic = 'force-static';
export const dynamicParams = true;

/**
 * Generate static params for all known reed diffuser products.
 */
export async function generateStaticParams() {
  return [
    { slug: 'floral-amber' },
    { slug: 'fruity-amber' },
    { slug: 'lavender-jasmine' },
    { slug: 'orange-jasmine' },
  ];
}

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generates custom SEO metadata for each specific scent profile.
 */
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const productKey = `reed-diffuser-${slug}`;
  const product = PRODUCTS_DETAILS[productKey];

  if (!product) {
    return {
      title: 'Ürün Bulunamadı | Noscanda Group',
    };
  }

  return {
    title: `${product.name} | Premium Reed Diffuser | Noscanda Group`,
    description: product.description,
  };
}

export default async function ReedDiffuserProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const productKey = `reed-diffuser-${slug}`;
  const product = PRODUCTS_DETAILS[productKey];

  if (!product) {
    notFound();
  }

  return <Structure product={product} />;
}

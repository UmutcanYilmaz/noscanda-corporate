import { redirect } from 'next/navigation';

/**
 * Redirects the old /urunlerimiz path to the new /e-katalog path.
 */
export default function UrunlerimizRedirect() {
  redirect('/e-katalog');
}

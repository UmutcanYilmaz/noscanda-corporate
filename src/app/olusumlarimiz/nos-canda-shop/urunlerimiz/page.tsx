import { redirect } from 'next/navigation';

/**
 * Redirects the old /urunlerimiz path to the new /olusumlarimiz/nos-canda-shop path.
 */
export default function UrunlerimizRedirect() {
  redirect('/olusumlarimiz/nos-canda-shop');
}



import { redirect } from 'next/navigation';

/**
 * Redirects the legacy /e-katalog page to the new consolidated /olusumlarimiz/nos-canda-shop page.
 */
export default function EKatalogRedirectPage() {
  redirect('/olusumlarimiz/nos-canda-shop');
}



import { redirect } from 'next/navigation';

/**
 * Legacy route — redirects to the new /olusumlarimiz/nos-canda-one/vakif page.
 * Kept for backward compatibility with old links.
 */
export default function VakifRedirect() {
  redirect('/olusumlarimiz/nos-canda-one/vakif');
}


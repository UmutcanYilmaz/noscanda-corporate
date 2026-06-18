import { redirect } from 'next/navigation';

/**
 * Legacy route — redirects to the new /olusumlarimiz/nos-canda-one/vakif page.
 */
export default function VakifLegacyRedirect() {
  redirect('/olusumlarimiz/nos-canda-one/vakif');
}


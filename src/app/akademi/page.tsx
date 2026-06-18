import { redirect } from 'next/navigation';

/**
 * Legacy route — redirects to the new /olusumlarimiz/nos-canda-one/akademi page.
 */
export default function AkademiLegacyRedirect() {
  redirect('/olusumlarimiz/nos-canda-one/akademi');
}


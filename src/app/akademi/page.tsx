import { redirect } from 'next/navigation';

/**
 * Legacy route — redirects to the new /nos-canda-one/akademi page.
 */
export default function AkademiLegacyRedirect() {
  redirect('/nos-canda-one/akademi');
}

import { redirect } from 'next/navigation';

/**
 * Legacy route — redirects to the new /nos-canda-one/vakif page.
 */
export default function VakifLegacyRedirect() {
  redirect('/nos-canda-one/vakif');
}

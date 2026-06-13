import { redirect } from 'next/navigation';

/**
 * Legacy route — redirects to the new /nos-canda-one/vakif page.
 * Kept for backward compatibility with old links.
 */
export default function VakifRedirect() {
  redirect('/nos-canda-one/vakif');
}

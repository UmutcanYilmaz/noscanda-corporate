import { redirect } from 'next/navigation';

/**
 * Legacy route — redirects to the standalone /vakif page.
 * Kept for backward compatibility with old links.
 */
export default function VakifRedirect() {
  redirect('/vakif');
}

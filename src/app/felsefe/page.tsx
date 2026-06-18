import { redirect } from 'next/navigation';

/**
 * Redirects the old /felsefe path to the new /kurumsal-bilgiler/felsefe path.
 */
export default function OldFelsefeRedirect() {
  redirect('/kurumsal-bilgiler/felsefe');
}

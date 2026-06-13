import { redirect } from 'next/navigation';

/**
 * Redirects the old /felsefe path to the new /hakkimizda/felsefe path.
 */
export default function OldFelsefeRedirect() {
  redirect('/hakkimizda/felsefe');
}

import { redirect } from 'next/navigation';

/**
 * Redirects the old /dmo-katalogu path to the consolidated B2G /is-modellerimiz/b2g path.
 */
export default function OldDmoRedirect() {
  redirect('/is-modellerimiz/b2g');
}

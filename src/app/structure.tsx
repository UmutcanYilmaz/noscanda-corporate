'use client';

import { Hero } from './sections/hero';
import { Marquee } from './sections/marquee';
import { Stats } from './sections/stats';
import { Manifesto } from './sections/manifesto';
import { Girisimcilik } from './sections/girisimcilik';
import { IsModelleri } from './sections/is-modelleri';
import { Products } from './sections/products';
import { NosCandaOne } from './sections/nos-canda-one';
import { Yatirimci } from './sections/yatirimci';
import { Contact } from './sections/contact';

/**
 * Re-ordered, priority-driven Corporate Group Homepage Structure.
 * Sequence: Hero -> Marquee -> Stats -> About/Manifesto -> Girişimcilik -> İş Modelleri ->
 *   Product Catalogue -> Nos Canda One -> Yatırımcı İlişkileri -> Contact.
 */
export function Structure() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Manifesto />
      <Girisimcilik />
      <IsModelleri />
      <Products />
      <NosCandaOne />
      <Yatirimci />
      <Contact />
    </>
  );
}

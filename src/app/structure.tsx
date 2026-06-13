'use client';

import { Hero } from './sections/hero';
import { Marquee } from './sections/marquee';
import { Stats } from './sections/stats';
import { Manifesto } from './sections/manifesto';
import { Girisimcilik } from './sections/girisimcilik';
import { IsModelleri } from './sections/is-modelleri';
import { Products } from './sections/products';
import { Testimonials } from './sections/testimonials';
import { Vakif } from './sections/vakif';
import { Akademi } from './sections/akademi';
import { Yatirimci } from './sections/yatirimci';
import { Contact } from './sections/contact';

/**
 * Re-ordered, priority-driven Corporate Group Homepage Structure.
 * Sequence: Hero -> Marquee -> Stats -> About/Manifesto -> Girişimcilik -> İş Modelleri ->
 *   Product Catalogue -> Testimonials -> Vakıf -> Akademi -> Yatırımcı İlişkileri -> Contact.
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
      <Testimonials />
      <Vakif />
      <Akademi />
      <Yatirimci />
      <Contact />
    </>
  );
}

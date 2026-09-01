import * as React from "react";
import { GalleryProvider } from "@/components/gallery-context";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/sections/hero";
import { Intro } from "@/sections/intro";
import { Method } from "@/sections/method";
import { Projects } from "@/sections/projects";
import { About } from "@/sections/about";
import { Services } from "@/sections/services";
import { Testimonials } from "@/sections/testimonials";
import { Faq } from "@/sections/faq";
import { Contact } from "@/sections/contact";
import { Outro } from "@/sections/outro";

export default function App() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const api = React.useMemo(() => ({ open: setOpenIndex }), []);
  const close = React.useCallback(() => setOpenIndex(null), []);

  return (
    <GalleryProvider value={api}>
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <Method />
        <Projects />
        <About />
        <Services />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Outro />
      <GalleryLightbox index={openIndex} onClose={close} />
    </GalleryProvider>
  );
}

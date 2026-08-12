import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { SlideFooter } from "@/components/slide-chrome";
import { BRAND } from "@/data/content";

export function Outro() {
  return (
    <footer className="relative bg-cream px-4 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Dernière planche : le titre déborde sur la photo, comme la première. */}
        <Reveal as="p" className="relative z-10 type-poster text-[clamp(3.4rem,18vw,15rem)] text-blue">
          Merci
        </Reveal>

        <div className="relative -mt-[0.12em]">
          <Photo name="bande" ratio="21 / 9" imgClassName="object-[center_58%]" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-cream/85 to-transparent"
          />
        </div>

        <SlideFooter
          left={{ label: "Préparé par :", value: BRAND.person }}
          className="mt-8 border-t border-ink/25 pt-5"
        />

        <nav
          aria-label="Pied de page"
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-body text-[10px] font-bold uppercase tracking-[0.16em] text-ink/70 sm:text-[11px]"
        >
          <a className="hover:text-blue" href="#methode">Ma méthode</a>
          <a className="hover:text-blue" href="#realisations">Réalisations</a>
          <a className="hover:text-blue" href="#apropos">Qui je suis</a>
          <a className="hover:text-blue" href="#services">Services</a>
          <a className="hover:text-blue" href="#avis">Avis</a>
          <a className="hover:text-blue" href="#faq">Questions</a>
          <a className="hover:text-blue" href="#devis">Devis</a>
        </nav>

        <p className="mt-6 font-body text-[10px] uppercase tracking-[0.14em] text-ink/55 sm:text-[11px]">
          Site de démonstration — paysagiste fictif, avis fictifs, photos
          d'illustration (Unsplash). © {new Date().getFullYear()} {BRAND.name} ·{" "}
          {BRAND.town}
        </p>
      </div>
    </footer>
  );
}

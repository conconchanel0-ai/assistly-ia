import * as React from "react";
import { photoIndex } from "@/data/gallery";
import { useGallery } from "@/components/gallery-context";
import { BRAND } from "@/data/content";

/**
 * Ouverture plein écran : une seule photo, et un scroll-hero court.
 *
 * Sur la course (≈ une hauteur d'écran), la photo se dézoome doucement, le
 * titre remonte, et un voile crème monte du bas pour passer la main à la
 * planche suivante. Tout est écrit directement dans le DOM à chaque frame :
 * aucun rendu React pendant le défilement.
 */
export function Hero() {
  const { open } = useGallery();
  const wrapRef = React.useRef<HTMLElement>(null);
  const imgRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);
  const hintRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const wrap = wrapRef.current;
      if (!wrap) return;
      const total = wrap.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -wrap.getBoundingClientRect().top / total)) : 0;

      if (imgRef.current) {
        imgRef.current.style.transform = `scale(${(1.14 - 0.14 * p).toFixed(4)})`;
      }
      if (titleRef.current) {
        titleRef.current.style.transform = `translateY(${(-p * 46).toFixed(1)}px)`;
        titleRef.current.style.opacity = String(Math.max(0, 1 - p * 1.15));
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(Math.max(0, 1 - p * 6));
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={wrapRef} id="haut" className="relative h-[150svh] bg-ink">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* La photo : plein cadre, noir et blanc, cliquable comme les autres. */}
        <button
          type="button"
          onClick={() => open(photoIndex("jardin"))}
          aria-label="Voir la galerie des jardins en couleur"
          className="absolute inset-0 block cursor-pointer overflow-hidden bg-ink outline-none"
        >
          <div ref={imgRef} className="h-full w-full will-change-transform">
            <picture>
              <source media="(min-width: 700px)" srcSet="images/jardin.jpg" />
              <img
                src="images/jardin-mobile.jpg"
                alt="Jardin aménagé : escalier en pierre, pelouse, arbres taillés en boule et clôture bois"
                fetchPriority="high"
                draggable={false}
                className="h-full w-full object-cover [filter:grayscale(1)_contrast(1.06)]"
              />
            </picture>
          </div>
        </button>

        {/* Voiles : lisibilité de la barre de navigation en haut, du titre en bas. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/60 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent"
        />

        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end px-4 pb-5 pt-20 sm:px-8 sm:pb-7">
          <div ref={titleRef} className="will-change-transform">
            <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-cream/85 sm:text-[12px]">
              {BRAND.name} — depuis {BRAND.since}
            </p>
            <h1 className="mt-1 type-poster text-[clamp(3.4rem,17.5vw,15rem)] text-cream">
              Paysagiste
            </h1>
            <p className="mt-2 max-w-[46ch] font-body text-[11px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-cream/85 sm:text-[13px]">
              Maëlle Le Guen — création et entretien de jardins, Rennes et trente
              kilomètres alentour.
            </p>
          </div>

          <p
            ref={hintRef}
            className="mt-6 text-center font-body text-[9.5px] font-bold uppercase tracking-[0.22em] text-cream/75 sm:text-[11px]"
          >
            ↓ Faites défiler
          </p>
        </div>

      </div>
    </section>
  );
}

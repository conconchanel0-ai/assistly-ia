import * as React from "react";
import { X } from "lucide-react";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import { GALLERY } from "@/data/gallery";

interface GalleryLightboxProps {
  /** Index de départ ; `null` ferme l'éventail. */
  index: number | null;
  onClose: () => void;
}

/**
 * L'éventail plein écran. Les photos de la page sont en noir et blanc ;
 * ici elles reprennent leur couleur, sans filtre.
 */
export function GalleryLightbox({ index, onClose }: GalleryLightboxProps) {
  const open = index !== null;
  const [selected, setSelected] = React.useState(index ?? 0);
  const [openedAt, setOpenedAt] = React.useState(index);
  const frameRef = React.useRef<HTMLDivElement>(null);
  const closeRef = React.useRef<HTMLButtonElement>(null);

  // Recalé pendant le rendu, et non dans un effet : le carrousel doit se
  // monter avec le bon index dès la première image, sinon il s'ouvre sur la
  // première photo au lieu de celle qu'on a cliquée.
  if (index !== null && index !== openedAt) {
    setOpenedAt(index);
    setSelected(index);
  }

  // Échap ferme, et le focus part dans la modale pour que les flèches du
  // carrousel répondent tout de suite au clavier.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const { overflow, paddingRight } = document.body.style;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    // Compense la barre de défilement pour que la page ne saute pas latéralement.
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;

    const previous = document.activeElement as HTMLElement | null;
    const focusTarget = frameRef.current?.querySelector<HTMLElement>("[tabindex='0']");
    focusTarget?.focus({ preventScroll: true });

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previous?.focus?.({ preventScroll: true });
    };
  }, [open, onClose]);

  if (!open) return null;

  const active = GALLERY[selected];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galerie photo en couleur"
      className="fixed inset-0 z-[300] flex flex-col bg-blue/97 backdrop-blur-sm duration-200 animate-in fade-in"
    >
      {/* Bandeau : même grille d'en-tête que les sections de la page. */}
      <div className="flex items-start justify-between gap-4 px-4 pt-4 sm:px-8 sm:pt-6">
        <div className="min-w-0">
          <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-cream/70 sm:text-[11px]">
            Galerie · en couleur
          </p>
          <p className="mt-1 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-cream/50 sm:text-[11px]">
            Touchez un côté ou glissez
          </p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fermer la galerie"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Le carrousel prend la hauteur restante et reste centré. */}
      <div ref={frameRef} className="flex min-h-0 flex-1 items-center">
        <CoverflowCarousel
          // Remonté à chaque ouverture : la position de départ est figée à
          // la construction du carrousel.
          key={index}
          slides={GALLERY}
          initialIndex={index}
          onSelect={setSelected}
          showPagination
          loop
          label="Photos des jardins, en couleur"
          cardWidth="clamp(210px, 62vw, 420px)"
          className="[--cf-shadow:none]"
          cardClassName="rounded-none shadow-[0_30px_60px_-30px_rgba(0,0,0,.7)]"
        />
      </div>

      {/* Légende : reprend la typo des planches plutôt que celle du composant. */}
      <div
        key={selected}
        className="px-4 pb-6 duration-300 animate-in fade-in sm:px-8 sm:pb-10"
      >
        <div className="mx-auto flex max-w-4xl flex-col gap-3 border-t border-cream/25 pt-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0">
            <h2 className="type-poster text-[clamp(1.5rem,7vw,2.6rem)] text-cream">
              {active.title}
            </h2>
            <p className="mt-1 font-body text-[11px] font-bold uppercase tracking-[0.18em] text-cream/70">
              {active.subtitle}
              <span className="ml-2 font-semibold tracking-[0.14em] text-cream/45">
                {selected + 1} / {GALLERY.length}
              </span>
            </p>
            {active.note && (
              <p className="mt-2 max-w-[64ch] font-body text-[11.5px] leading-relaxed text-cream/80 sm:text-[12.5px]">
                {active.note}
              </p>
            )}
          </div>
          {active.meta && (
            <dl className="flex shrink-0 flex-wrap gap-x-6 gap-y-1 sm:justify-end sm:text-right">
              {active.meta.map((row) => (
                <div key={row.label} className="min-w-[84px]">
                  <dt className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/55">
                    {row.label}
                  </dt>
                  <dd className="font-body text-[13px] font-bold uppercase tracking-[0.06em] text-cream">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </div>
  );
}

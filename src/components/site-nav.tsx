import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND } from "@/data/content";

const CHAPTERS = [
  { href: "#intro", label: "Introduction" },
  { href: "#methode", label: "Ma méthode" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#apropos", label: "Qui je suis" },
  { href: "#services", label: "Services" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "Questions" },
];

/** Marge minimale exigée entre le nom du site et le premier chapitre. */
const GAP_BRAND = 64;
/** Marge minimale entre le dernier chapitre et le bouton de devis. */
const GAP_ACTIONS = 28;

export function SiteNav() {
  /** Vrai dès que la photo d'ouverture cède la place à la planche crème. */
  const [solid, setSolid] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  /** Vrai quand les sept chapitres tiennent en entier dans la barre. */
  const [inline, setInline] = React.useState(false);

  const navRef = React.useRef<HTMLElement>(null);
  const brandRef = React.useRef<HTMLAnchorElement>(null);
  const listRef = React.useRef<HTMLUListElement>(null);
  const actionsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.45);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // C'est la place disponible qui décide, pas un point de rupture arbitraire :
  // la liste reste dans le DOM (hors flux quand elle ne tient pas) pour rester
  // mesurable, donc la décision ne dépend jamais de son propre affichage.
  React.useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const measure = () => {
      const list = listRef.current;
      const brand = brandRef.current;
      const actions = actionsRef.current;
      if (!list || !brand || !actions) return;

      const style = getComputedStyle(nav);
      const available =
        nav.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      const needed =
        brand.offsetWidth +
        GAP_BRAND +
        list.scrollWidth +
        GAP_ACTIONS +
        actions.offsetWidth;

      setInline(needed <= available);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    // Les polices arrivent après le premier rendu : on remesure une fois posées.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => observer.disconnect();
  }, []);

  // Menu : Échap ferme, et la page ne défile pas derrière.
  React.useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [menu]);

  // Le menu déroulant n'a plus lieu d'être si tout est déjà dans la barre.
  React.useEffect(() => {
    if (inline) setMenu(false);
  }, [inline]);

  const onImage = !solid;

  return (
    <>
      <header
        className={cn(
          // Fixe : la barre surplombe la photo plein écran au lieu de lui
          // voler une bande en haut de page.
          "fixed inset-x-0 top-0 z-[200] border-b transition-colors duration-300",
          solid
            ? "border-ink/15 bg-cream/93 backdrop-blur-sm"
            : "border-cream/20 bg-transparent",
        )}
      >
        <nav
          ref={navRef}
          aria-label="Navigation principale"
          className="relative mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between gap-4 px-4 sm:h-15 sm:px-8"
        >
          <a
            ref={brandRef}
            href="#haut"
            className={cn(
              "shrink-0 font-body text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 sm:text-[12px]",
              onImage ? "text-cream" : "text-ink",
            )}
          >
            {BRAND.name}
          </a>

          <ul
            ref={listRef}
            aria-hidden={!inline}
            className={cn(
              "flex shrink-0 items-center gap-5 xl:gap-7",
              // Hors flux et invisible quand ça ne tient pas : mesurable, mais
              // sans peser sur la mise en page ni sur la navigation clavier.
              inline
                ? "static"
                : "pointer-events-none invisible absolute left-0 top-0 -z-10",
            )}
          >
            {CHAPTERS.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  tabIndex={inline ? undefined : -1}
                  className={cn(
                    "whitespace-nowrap font-body text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300",
                    onImage
                      ? "text-cream/85 hover:text-cream"
                      : "text-ink/70 hover:text-blue",
                  )}
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>

          <div ref={actionsRef} className="flex shrink-0 items-center gap-2">
            <a
              href="#devis"
              className={cn(
                "whitespace-nowrap px-4 py-2.5 font-body text-[10px] font-bold uppercase tracking-[0.16em] transition duration-300 sm:text-[11px]",
                onImage
                  ? "border border-cream/60 text-cream hover:bg-cream hover:text-ink"
                  : "bg-blue text-cream hover:bg-ink",
              )}
            >
              Devis gratuit
            </a>
            {/* Le burger n'existe que si les chapitres ne tiennent pas. */}
            {!inline && (
              <button
                type="button"
                onClick={() => setMenu(true)}
                aria-label="Ouvrir le sommaire"
                aria-expanded={menu}
                className={cn(
                  "-mr-2 flex size-11 items-center justify-center transition-colors duration-300",
                  onImage ? "text-cream" : "text-ink",
                )}
              >
                <Menu className="size-6" />
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Sommaire plein écran : les chapitres en grand. */}
      {menu && !inline && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sommaire"
          className="fixed inset-0 z-[250] flex flex-col bg-blue duration-200 animate-in fade-in"
        >
          <div className="flex h-14 items-center justify-between px-4 sm:h-15 sm:px-8">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-cream">
              Sommaire
            </span>
            <button
              type="button"
              onClick={() => setMenu(false)}
              aria-label="Fermer le sommaire"
              className="-mr-2 flex size-11 items-center justify-center text-cream"
            >
              <X className="size-6" />
            </button>
          </div>

          <nav
            aria-label="Chapitres"
            className="flex min-h-0 flex-1 flex-col justify-center gap-1 overflow-y-auto px-4 pb-6 sm:px-8"
          >
            {CHAPTERS.map((c, i) => (
              <a
                key={c.href}
                href={c.href}
                onClick={() => setMenu(false)}
                className="flex items-baseline gap-3 border-b border-cream/20 py-2.5"
              >
                <span className="font-body text-[10px] font-bold tracking-[0.16em] text-cream/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="type-poster text-[clamp(1.7rem,8vw,2.6rem)] text-cream">
                  {c.label}
                </span>
              </a>
            ))}
            <a
              href="#devis"
              onClick={() => setMenu(false)}
              className="mt-4 bg-cream px-5 py-4 text-center font-body text-[12px] font-bold uppercase tracking-[0.18em] text-blue"
            >
              Demander un devis
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

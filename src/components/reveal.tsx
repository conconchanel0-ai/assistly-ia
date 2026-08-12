import * as React from "react";
import { cn } from "@/lib/utils";

type Tag = "div" | "li" | "p" | "figure" | "h2" | "h3" | "ol" | "ul" | "dl" | "form";

interface RevealProps {
  /** Balise rendue — utile pour rester valide dans une liste ou un tableau. */
  as?: Tag;
  /** Décalage en millisecondes, pour faire entrer une série en cascade. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

/** Vrai si l'utilisateur a demandé à limiter les animations. */
function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Fait apparaître son contenu quand il entre dans l'écran, une seule fois.
 * L'observateur se débranche juste après : rien ne tourne pendant le reste
 * du défilement.
 */
export function Reveal({ as = "div", delay = 0, className, children }: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (prefersReducedMotion()) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // `top < 0` : un défilement rapide a pu franchir l'élément sans qu'il
        // soit jamais rapporté visible — on l'affiche quand même.
        const seen = entries.some(
          (entry) => entry.isIntersecting || entry.boundingClientRect.top < 0,
        );
        if (seen) {
          setShown(true);
          observer.disconnect();
        }
      },
      // Le contenu se déclenche un peu avant d'être au bord de l'écran.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    as,
    {
      ref,
      className: cn("reveal", shown && "is-in", className),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}

interface CountUpProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Chiffre qui défile jusqu'à sa valeur quand il entre dans l'écran.
 * Écrit directement dans le DOM : pas de rendu React à chaque frame.
 */
export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
  className,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    const write = (v: number) => {
      el.textContent = `${prefix}${format.format(v)}${suffix}`;
    };

    if (prefersReducedMotion()) {
      write(value);
      return;
    }

    write(0);
    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      // Sortie douce : le chiffre ralentit en approchant de sa valeur.
      write(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
      else write(value);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          raf = requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [decimals, duration, prefix, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

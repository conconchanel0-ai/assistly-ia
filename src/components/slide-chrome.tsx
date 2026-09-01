import * as React from "react";
import { cn } from "@/lib/utils";
import { BRAND } from "@/data/content";

/** Bandeau d'en-tête des planches : marque · intervenant · zone. */
export function SlideHeader({
  tone = "ink",
  right,
  className,
}: {
  tone?: "ink" | "cream";
  right?: string;
  className?: string;
}) {
  const color = tone === "cream" ? "text-cream" : "text-ink";
  return (
    <div
      className={cn(
        "flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-body text-[9.5px] font-bold uppercase tracking-[0.16em] sm:text-[11px] sm:tracking-[0.18em]",
        color,
        className,
      )}
    >
      <span>{BRAND.name}</span>
      <span className="hidden sm:inline">{BRAND.person}</span>
      <span className="opacity-80 sm:opacity-100">{right ?? BRAND.area}</span>
    </div>
  );
}

/**
 * Mention discrète signalant ce qui n'est pas vérifié : chiffres estimés,
 * avis rédigés, formulaire de démonstration. Volontairement lisible mais
 * effacée — elle ne doit pas manger la planche.
 */
export function Mention({
  tone = "ink",
  className,
  children,
}: {
  tone?: "ink" | "cream";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "mt-5 font-body text-[9.5px] font-semibold uppercase leading-relaxed tracking-[0.14em] sm:text-[10.5px]",
        tone === "cream" ? "text-cream/55" : "text-ink/45",
        className,
      )}
    >
      <span aria-hidden="true" className="mr-1.5">
        ✳
      </span>
      {children}
    </p>
  );
}

/** Numéro de planche, à la verticale contre le bord droit. Masqué sur mobile. */
export function PageMark({
  n,
  total = 9,
  tone = "ink",
}: {
  n: number;
  total?: number;
  tone?: "ink" | "cream";
}) {
  const pad = (v: number) => String(v).padStart(2, "0");
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 font-body text-[11px] font-bold uppercase tracking-[0.2em] lg:block",
        tone === "cream" ? "text-cream/80" : "text-ink/60",
      )}
      style={{ writingMode: "vertical-rl" }}
    >
      {pad(n)}\{pad(total)}
    </span>
  );
}

/** Pied de planche : « Préparé pour » à gauche, site à droite. */
export function SlideFooter({
  tone = "ink",
  left = { label: "Devis gratuit :", value: "sous 48 heures" },
  className,
}: {
  tone?: "ink" | "cream";
  left?: { label: string; value: string };
  className?: string;
}) {
  const color = tone === "cream" ? "text-cream" : "text-ink";
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-x-6 gap-y-4 font-body",
        color,
        className,
      )}
    >
      <div>
        <p className="text-[11px] font-bold sm:text-[13px]">{left.label}</p>
        <p className="text-[11px] font-bold uppercase tracking-[0.1em] sm:text-[13px]">
          {left.value}
        </p>
      </div>
      <div className="text-right">
        <p className="text-[11px] font-bold sm:text-[13px]">Site :</p>
        <p className="text-[11px] font-bold uppercase tracking-[0.1em] sm:text-[13px]">
          {BRAND.site}
        </p>
      </div>
    </div>
  );
}

/** Conteneur d'une planche : fond, marges, en-tête et numéro. */
export function Slide({
  id,
  tone = "cream",
  n,
  headerRight,
  className,
  innerClassName,
  children,
}: {
  id?: string;
  tone?: "cream" | "blue";
  n?: number;
  headerRight?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  const inkTone = tone === "blue" ? "cream" : "ink";
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-16 px-4 py-12 sm:px-8 sm:py-16 lg:py-20",
        tone === "blue" ? "bg-blue text-cream" : "bg-cream text-ink",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-[1400px]", innerClassName)}>
        <SlideHeader tone={inkTone} right={headerRight} />
        {children}
      </div>
      {n !== undefined && <PageMark n={n} tone={inkTone} />}
    </section>
  );
}

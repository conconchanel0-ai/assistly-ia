import { ArrowDownRight } from "lucide-react";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { PageMark, SlideHeader } from "@/components/slide-chrome";

export function Intro() {
  return (
    <section
      id="intro"
      className="relative scroll-mt-16 overflow-hidden bg-cream px-4 pb-0 pt-12 sm:px-8 sm:pt-16 lg:pt-20"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SlideHeader right="Introduction" />

        {/* L'accroche et l'appel à l'action, repris de l'ouverture. */}
        <div className="mt-6 grid gap-6 sm:mt-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <Reveal as="p" className="type-editorial max-w-[62ch] text-[11.5px] sm:text-[13px]">
            Maëlle Le Guen dessine, plante et entretient des jardins de particuliers
            dans un rayon de trente kilomètres autour de Rennes. Une quinzaine de
            créations par an, une trentaine de jardins suivis à l'année, et un
            principe : un jardin réussi est un jardin qui vous demande moins de
            travail chaque année.
          </Reveal>
          <Reveal delay={100} className="flex flex-col items-start gap-4 md:items-end">
            <a
              href="#devis"
              className="group inline-flex items-center gap-3 bg-blue px-6 py-4 font-body text-[12px] font-bold uppercase tracking-[0.18em] text-cream transition hover:bg-ink sm:text-[13px]"
            >
              Demander un devis
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-ink/70 sm:text-[11px] md:justify-end">
              <li>Visite gratuite</li>
              <li aria-hidden="true">·</li>
              <li>Réponse sous 48 h</li>
              <li aria-hidden="true">·</li>
              <li>Garantie de reprise 1 an</li>
            </ul>
          </Reveal>
        </div>

        {/* Triptyque : trois photos de même hauteur, comme sur la planche. */}
        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          <Reveal>
            <Photo name="pelouse" ratio="4 / 3" caption="Liffré · pelouse et arbres" />
          </Reveal>
          <Reveal delay={110}>
            <Photo name="taille" ratio="4 / 3" caption="Melesse · taille d'hiver" />
          </Reveal>
          <Reveal delay={220}>
            <Photo name="portail" ratio="4 / 3" caption="Acigné · entrée de jardin" />
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">
          <Reveal as="p" className="type-editorial text-[11.5px] sm:text-[12.5px]">
            Un jardin ne se juge pas le jour de la livraison, mais trois hivers plus
            tard. C'est pour ça que je travaille sur un seul chantier à la fois, que
            je plante en racines nues quand la saison le permet, et que je repasse à
            trois mois puis à un an pour remplacer ce qui n'a pas repris.
          </Reveal>
          <Reveal as="p" delay={110} className="type-editorial text-[11.5px] sm:text-[12.5px]">
            Création, terrasses, plantations, taille, entretien à l'année : tout part
            d'une visite gratuite du terrain et d'un devis détaillé poste par poste,
            dont vous pouvez retirer des lignes. Les photos de ce site sont en noir
            et blanc — cliquez sur l'une d'elles pour les voir toutes en couleur.
          </Reveal>
        </div>
      </div>

      {/* Le mot géant vient s'asseoir sur le bord bas de la planche. */}
      <Reveal
        as="p"
        className="mt-8 select-none pb-[0.06em] type-poster text-[clamp(3.2rem,19vw,16rem)] leading-[0.98] text-blue sm:mt-10"
      >
        Introduction
      </Reveal>
      <PageMark n={2} />
    </section>
  );
}

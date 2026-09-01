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
            Dis Moi Nature entretient et aménage les jardins jusqu'à 25 km
            autour de Bains-les-Bains, chez les particuliers comme dans les
            entreprises. Taille, tonte, débroussaillage, désherbage naturel,
            soin des plantes, massifs et potagers : pour un besoin ponctuel
            comme pour toute l'année.
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
              <li>Devis gratuit</li>
              <li aria-hidden="true">·</li>
              <li>50 % de réduction</li>
              <li aria-hidden="true">·</li>
              <li>Particuliers &amp; entreprises</li>
            </ul>
          </Reveal>
        </div>

        {/* Triptyque : trois photos de même hauteur, comme sur la planche. */}
        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          <Reveal>
            <Photo name="haie" ratio="4 / 3" caption="Haies · taille d'entretien" />
          </Reveal>
          <Reveal delay={110}>
            <Photo name="pelouse" ratio="4 / 3" caption="Pelouse · tonte et bordures" />
          </Reveal>
          <Reveal delay={220}>
            <Photo name="potager" ratio="4 / 3" caption="Potager · création et suivi" />
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">
          <Reveal as="p" className="type-editorial text-[11.5px] sm:text-[12.5px]">
            Le désherbage se fait naturellement, à la main, mécaniquement et par
            paillage. La taille suit le rythme de la plante plutôt que celui du
            calendrier. Et chaque projet tient compte du temps d'entretien que
            vous pourrez y consacrer une fois le chantier terminé.
          </Reveal>
          <Reveal as="p" delay={110} className="type-editorial text-[11.5px] sm:text-[12.5px]">
            Les devis sont gratuits et adaptés à vos besoins, et de nombreuses
            prestations ouvrent droit à 50 % de réduction au titre des services
            à la personne — on vous accompagne gratuitement dans les démarches.
            Les photos de ce site sont en noir et blanc : cliquez sur l'une
            d'elles pour les voir toutes en couleur.
          </Reveal>
        </div>
      </div>

      {/* Le mot géant vient s'asseoir sur le bord bas de la planche. */}
      <Reveal
        as="p"
        className="mt-8 select-none pb-[0.06em] type-poster text-[clamp(3.2rem,19vw,16rem)] leading-[0.98] text-blue sm:mt-10"
      >
        Bienvenue
      </Reveal>
      <PageMark n={2} />
    </section>
  );
}

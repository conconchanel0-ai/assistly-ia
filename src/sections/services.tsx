import { Reveal } from "@/components/reveal";
import { Mention, Slide } from "@/components/slide-chrome";
import { SERVICES } from "@/data/content";

export function Services() {
  return (
    <Slide id="services" n={6} headerRight="Prestations">
      <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-12">
        <Reveal as="h2" className="type-poster text-[clamp(2.8rem,12.5vw,9.5rem)] text-blue">
          Les prestations
        </Reveal>
        <Reveal as="p" delay={90} className="type-editorial max-w-[58ch] text-[11.5px] sm:text-[12.5px] lg:pb-3">
          Huit façons de s'occuper de votre jardin, chez les particuliers comme
          dans les entreprises. Pour un besoin ponctuel comme pour un entretien
          suivi tout au long de l'année.
        </Reveal>
      </div>

      <ol className="mt-8 sm:mt-10">
        {SERVICES.map((service, i) => (
          <Reveal
            as="li"
            key={service.n}
            delay={(i % 4) * 80}
            className="group grid gap-2 border-t border-ink/25 py-5 sm:grid-cols-[auto_minmax(0,1.1fr)_minmax(0,2fr)] sm:gap-6 sm:py-6"
          >
            <span className="type-poster text-[clamp(1.4rem,4.5vw,2rem)] leading-none text-blue sm:pt-1">
              {service.n}
            </span>
            <h3 className="font-body text-[15px] font-bold uppercase tracking-[0.08em] sm:pt-1 sm:text-[17px]">
              {service.title}
            </h3>
            <p className="type-editorial max-w-[62ch] text-[11.5px] text-ink/85 sm:text-[12.5px]">
              {service.body}
            </p>
          </Reveal>
        ))}
      </ol>
      <div className="border-t border-ink/25" />
      <Mention>
        Les huit prestations sont celles annoncées sur dis-moi-nature.fr. Les
        détails de mise en œuvre (broyage sur place, périodes de taille, rythmes
        de passage) sont rédigés pour la maquette et restent à valider.
      </Mention>
    </Slide>
  );
}

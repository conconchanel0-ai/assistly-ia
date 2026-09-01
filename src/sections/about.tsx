import { Photo } from "@/components/photo";
import { CountUp, Reveal } from "@/components/reveal";
import { Mention, Slide, SlideFooter } from "@/components/slide-chrome";

const STATS = [
  { value: 2013, label: "année de création", grouping: false },
  { value: 25, label: "km autour de Bains-les-Bains" },
  { value: 50, label: "% de réduction, services à la personne" },
  { value: 10, label: "% avec la carte de fidélité" },
];

export function About() {
  return (
    <Slide id="apropos" tone="blue" n={5} headerRight="L'entreprise">
      <Reveal
        as="h2"
        className="mt-8 text-center type-poster text-[clamp(2.6rem,11.5vw,8.5rem)] text-cream sm:mt-10"
      >
        Dis Moi Nature
        <span className="mx-[0.1em] font-script text-[0.6em] normal-case tracking-normal">
          depuis
        </span>
        2013
      </Reveal>

      {/* Deux colonnes de texte encadrant la photo, comme sur la planche. */}
      <div className="mt-8 grid items-center gap-6 sm:mt-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
        <Reveal delay={80} className="space-y-4">
          <p className="type-editorial text-[11.5px] text-cream/90 sm:text-[12.5px]">
            Dis Moi Nature est une entreprise individuelle vosgienne, créée en
            2013 par Véronique Géhin. Entretien et aménagement du jardin, chez
            les particuliers comme dans les entreprises.
          </p>
          <p className="type-editorial text-[11.5px] text-cream/90 sm:text-[12.5px]">
            Une équipe dynamique et à votre écoute, qui intervient jusqu'à 25 km
            autour de Bains-les-Bains — aujourd'hui La Vôge-les-Bains, dans les
            Vosges. Des tarifs abordables toute l'année, et des devis gratuits.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <Photo
            name="outils"
            ratio="4 / 5"
            className="mx-auto w-full max-w-[300px] lg:w-[300px]"
          />
        </Reveal>

        <Reveal delay={160} className="space-y-4">
          <p className="type-editorial text-[11.5px] text-cream/90 sm:text-[12.5px]">
            L'entreprise est adhérente d'une coopérative de services à la
            personne : en vous y inscrivant, vous bénéficiez de 50 % sur votre
            facture, en crédit d'impôt différé ou en avance immédiate, comme
            vous préférez. L'accompagnement dans les démarches est gratuit.
          </p>
          <p className="type-editorial text-[11.5px] text-cream/90 sm:text-[12.5px]">
            Le petit plus : la carte de fidélité, gratuite elle aussi. Après cinq
            interventions réalisées, elle vous donne 10 % sur la prestation
            suivante. Il suffit de la demander.
          </p>
        </Reveal>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-cream/35 pt-6 sm:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 110}>
            <dt className="type-poster text-[clamp(2rem,7vw,3.4rem)] text-cream">
              <CountUp value={stat.value} grouping={stat.grouping} />
            </dt>
            <dd className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-cream/70 sm:text-[11px]">
              {stat.label}
            </dd>
          </Reveal>
        ))}
      </dl>

      <Mention tone="cream">
        Chiffres repris du site dis-moi-nature.fr et du répertoire Sirene :
        entreprise individuelle créée le 12 juillet 2013, Siren 794277996,
        activité 81.30Z — services d'aménagement paysager.
      </Mention>

      <SlideFooter
        tone="cream"
        left={{ label: "Où :", value: "Bains-les-Bains" }}
        className="mt-10 border-t border-cream/35 pt-5"
      />
    </Slide>
  );
}

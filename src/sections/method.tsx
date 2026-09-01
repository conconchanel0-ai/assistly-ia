import { Photo } from "@/components/photo";
import { Reveal, CountUp } from "@/components/reveal";
import { Slide } from "@/components/slide-chrome";
import { STEPS } from "@/data/content";

const FIGURES = [
  { value: 25, suffix: " km", label: "autour de Bains-les-Bains" },
  { value: 50, suffix: " %", label: "de réduction, services à la personne" },
  { value: 10, suffix: " %", label: "après cinq interventions" },
];

export function Method() {
  return (
    <Slide id="methode" tone="blue" n={3} headerRight="Comment ça se passe">
      <Reveal as="h2" className="mt-6 type-poster text-[clamp(2.6rem,11vw,8rem)] text-cream sm:mt-8">
        Du premier
        <span className="mx-[0.12em] font-script text-[0.62em] normal-case tracking-normal">
          appel au
        </span>
        jardin
      </Reveal>

      <Reveal
        as="p"
        delay={80}
        className="type-editorial mt-5 max-w-[70ch] text-[11.5px] text-cream/90 sm:text-[12.5px]"
      >
        Quatre étapes, sans mauvaise surprise : on se parle, on regarde le terrain
        ensemble, le devis part par mail, et le chantier ne commence qu'une fois
        que vous l'avez validé.
      </Reveal>

      <ol className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-5">
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 110} className="border-t border-cream/35 pt-4">
            <div className="flex items-baseline justify-between gap-3">
              <span className="type-poster text-[clamp(1.6rem,5vw,2.4rem)] text-cream">
                {step.n}
              </span>
              <span className="font-body text-[9.5px] font-bold uppercase tracking-[0.16em] text-cream/65 sm:text-[10px]">
                {step.aside}
              </span>
            </div>
            <Photo name={step.photo} ratio="16 / 11" className="mt-3" />
            <h3 className="mt-3 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-cream sm:text-[14px]">
              {step.title}
            </h3>
            <p className="type-editorial mt-2 text-[11px] text-cream/85 sm:text-[11.5px]">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>

      <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-cream/35 pt-5">
        {FIGURES.map((item, i) => (
          <Reveal key={item.label} delay={i * 120}>
            <dt className="type-poster text-[clamp(1.8rem,6vw,3rem)] text-cream">
              <CountUp value={item.value} suffix={item.suffix} />
            </dt>
            <dd className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-cream/70 sm:text-[11px]">
              {item.label}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Slide>
  );
}

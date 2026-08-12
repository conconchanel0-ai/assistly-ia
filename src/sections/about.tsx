import { Photo } from "@/components/photo";
import { CountUp, Reveal } from "@/components/reveal";
import { Slide, SlideFooter } from "@/components/slide-chrome";

const STATS = [
  { value: 15, label: "ans de métier" },
  { value: 140, label: "jardins dessinés" },
  { value: 30, label: "km autour de Rennes" },
  { value: 1, label: "an de garantie" },
];

export function About() {
  return (
    <Slide id="apropos" tone="blue" n={5} headerRight="Qui je suis">
      <Reveal
        as="h2"
        className="mt-8 text-center type-poster text-[clamp(2.6rem,11.5vw,8.5rem)] text-cream sm:mt-10"
      >
        Maëlle
        <span className="mx-[0.1em] font-script text-[0.6em] normal-case tracking-normal">
          le
        </span>
        Guen
      </Reveal>

      {/* Deux colonnes de texte encadrant la photo, comme sur la planche. */}
      <div className="mt-8 grid items-center gap-6 sm:mt-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
        <Reveal delay={80} className="space-y-4">
          <p className="type-editorial text-[11.5px] text-cream/90 sm:text-[12.5px]">
            BTS aménagements paysagers, puis six ans en bureau d'études à dessiner
            les jardins que d'autres allaient planter. En 2017, j'ai ouvert
            l'atelier pour faire les deux : le plan et la pelle.
          </p>
          <p className="type-editorial text-[11.5px] text-cream/90 sm:text-[12.5px]">
            Une quinzaine de créations par an, une trentaine de jardins suivis à
            l'année. Je travaille seule sur les petits chantiers, avec deux
            collègues pour la maçonnerie et les grosses plantations.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <Photo
            name="paysagiste"
            ratio="4 / 5"
            className="mx-auto w-full max-w-[300px] lg:w-[300px]"
          />
        </Reveal>

        <Reveal delay={160} className="space-y-4">
          <p className="type-editorial text-[11.5px] text-cream/90 sm:text-[12.5px]">
            Je plante en racines nues quand la saison le permet, je m'approvisionne
            dans trois pépinières d'Ille-et-Vilaine, et je préfère un jardin un peu
            libre qui tient tout seul à un jardin parfait qui vous prend tous vos
            samedis.
          </p>
          <p className="type-editorial text-[11.5px] text-cream/90 sm:text-[12.5px]">
            Sur le terrain, ça veut dire moins d'arrosage, moins de tonte, des haies
            qui respirent, et des massifs qui se referment au bout de deux saisons
            au lieu de demander un désherbage tous les quinze jours.
          </p>
        </Reveal>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-cream/35 pt-6 sm:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 110}>
            <dt className="type-poster text-[clamp(2rem,7vw,3.4rem)] text-cream">
              <CountUp value={stat.value} />
            </dt>
            <dd className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-cream/70 sm:text-[11px]">
              {stat.label}
            </dd>
          </Reveal>
        ))}
      </dl>

      <SlideFooter
        tone="cream"
        left={{ label: "Basée à :", value: "Betton (35)" }}
        className="mt-10 border-t border-cream/35 pt-5"
      />
    </Slide>
  );
}

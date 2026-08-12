import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Slide } from "@/components/slide-chrome";
import { photo } from "@/data/gallery";

const FEATURED = ["chemin", "terrasse", "allee"];
const REST = ["massif", "haie", "potager", "graminees", "fruitiers", "topiaires", "cloture", "bande"];

function ProjectHead({ name, n }: { name: string; n: number }) {
  const item = photo(name);
  const year = item.meta?.find((m) => m.label === "Année")?.value ?? "";
  return (
    <div className="flex items-baseline justify-between gap-3 border-t border-ink/25 pt-2">
      <span className="font-body text-[11px] font-bold uppercase tracking-[0.12em] sm:text-[13px]">
        Chantier {String(n).padStart(2, "0")}
      </span>
      <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/70 sm:text-[13px]">
        {year}
      </span>
    </div>
  );
}

export function Projects() {
  return (
    <Slide id="realisations" n={4} headerRight="Réalisations">
      <div className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-12">
        <Reveal as="h2" className="type-poster text-[clamp(2.8rem,12vw,9rem)] text-blue">
          Nos chantiers
        </Reveal>
        <Reveal
          as="p"
          delay={90}
          className="type-editorial max-w-[62ch] text-[11.5px] sm:text-[12.5px] lg:pt-3"
        >
          Une pente, un vis-à-vis, une terre lourde, un budget serré : c'est toujours
          la contrainte qui donne le dessin. Voici quatorze jardins livrés autour de
          Rennes ces quatre dernières années. Cliquez sur une photo pour ouvrir la
          galerie en couleur.
        </Reveal>
      </div>

      <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-3 sm:gap-4">
        {FEATURED.map((name, i) => (
          <Reveal key={name} delay={i * 120}>
            <ProjectHead name={name} n={i + 1} />
            <Photo
              name={name}
              ratio="3 / 4"
              className="mt-3"
              caption={`${photo(name).subtitle} · ${photo(name).title}`}
            />
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4">
        {REST.map((name, i) => (
          <Reveal key={name} delay={(i % 4) * 90}>
            <Photo
              name={name}
              ratio="1 / 1"
              caption={`${photo(name).subtitle} · ${photo(name).title}`}
            />
          </Reveal>
        ))}
      </div>
    </Slide>
  );
}

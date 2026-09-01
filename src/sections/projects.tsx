import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Mention, Slide } from "@/components/slide-chrome";
import { photo } from "@/data/gallery";

const FEATURED = ["haie", "massif", "potager"];
const REST = ["pelouse", "taille", "arbre", "hortensia", "graminees", "topiaires", "bande-jardin", "allee"];

function ProjectHead({ name, n }: { name: string; n: number }) {
  const item = photo(name);
  const aside = item.subtitle ?? "";
  return (
    <div className="flex items-baseline justify-between gap-3 border-t border-ink/25 pt-2">
      <span className="font-body text-[11px] font-bold uppercase tracking-[0.12em] sm:text-[13px]">
        Travaux {String(n).padStart(2, "0")}
      </span>
      <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/70 sm:text-[13px]">
        {aside}
      </span>
    </div>
  );
}

export function Projects() {
  return (
    <Slide id="realisations" n={4} headerRight="Les réalisations">
      <div className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-12">
        <Reveal as="h2" className="type-poster text-[clamp(2.8rem,12vw,9rem)] text-blue">
          Les travaux
        </Reveal>
        <Reveal
          as="p"
          delay={90}
          className="type-editorial max-w-[62ch] text-[11.5px] sm:text-[12.5px] lg:pt-3"
        >
          Haies, massifs, potagers, pelouses, bordures et vergers : le détail des
          prestations qu'on réalise dans les jardins de la Vôge. Cliquez sur une
          photo pour ouvrir la galerie en couleur.
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
      <Mention>
        Photos de chantier reprises des albums de dis-moi-nature.fr. Quatre
        cadres restent illustratifs — le potager, le geste de taille et les deux
        premières étapes — faute de photo correspondante dans les albums.
      </Mention>
    </Slide>
  );
}

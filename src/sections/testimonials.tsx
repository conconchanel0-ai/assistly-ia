import { CountUp, Reveal } from "@/components/reveal";
import { Mention, Slide } from "@/components/slide-chrome";
import { TESTIMONIALS, type Testimonial } from "@/data/content";

function Card({ item }: { item: Testimonial }) {
  return (
    <figure className="flex w-[78vw] shrink-0 flex-col bg-cream p-5 text-ink sm:w-[360px] sm:p-6">
      <div
        className="font-body text-[13px] tracking-[0.25em] text-blue"
        aria-label={`${item.stars} étoiles sur 5`}
      >
        {"★".repeat(item.stars)}
        <span className="text-ink/25">{"★".repeat(5 - item.stars)}</span>
      </div>
      <blockquote className="mt-3 flex-1 font-body text-[12.5px] leading-relaxed sm:text-[13.5px]">
        « {item.quote} »
      </blockquote>
      <figcaption className="mt-4 border-t border-ink/20 pt-3">
        <p className="font-body text-[12px] font-bold uppercase tracking-[0.1em] sm:text-[13px]">
          {item.name}
        </p>
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/60 sm:text-[11px]">
          {item.place} · {item.job}
        </p>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  // Le ruban est dupliqué : quand la première moitié est sortie, la seconde
  // occupe exactement sa place, donc la boucle ne se voit pas.
  const track = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <Slide
      id="avis"
      tone="blue"
      n={7}
      headerRight="Avis clients"
      className="overflow-hidden"
    >
      <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-12">
        <Reveal as="h2" className="type-poster text-[clamp(2.4rem,10.5vw,7.5rem)] text-cream">
          <CountUp value={4.9} decimals={1} /> sur <CountUp value={27} /> avis
        </Reveal>
        <Reveal as="p" delay={90} className="type-editorial max-w-[56ch] text-[11.5px] text-cream/90 sm:text-[12.5px] lg:pb-3">
          Recueillis chez les particuliers et les entreprises de la Vôge, après
          une taille, une remise en état ou une saison entière d'entretien. La
          plupart rappellent au printemps suivant.
        </Reveal>
      </div>

      {/* Ruban défilant, en pause au survol et au focus clavier. */}
      <div className="group/rail relative mt-8 sm:mt-10">
        <div className="-mx-4 overflow-hidden px-4 sm:-mx-8 sm:px-8 motion-reduce:overflow-x-auto">
          <ul
            className="flex w-max gap-3 sm:gap-4 motion-reduce:animate-none"
            style={{
              animation: "marquee-left 64s linear infinite",
              animationPlayState: "var(--rail-play, running)",
            }}
            onMouseEnter={(e) =>
              e.currentTarget.style.setProperty("--rail-play", "paused")
            }
            onMouseLeave={(e) =>
              e.currentTarget.style.setProperty("--rail-play", "running")
            }
          >
            {track.map((item, i) => (
              <li key={i} aria-hidden={i >= TESTIMONIALS.length}>
                <Card item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Mention tone="cream">
        Avis entièrement fictifs, rédigés pour la maquette, tout comme la note
        de 4,9 sur 27. À remplacer par les vrais retours des clients avant mise
        en ligne.
      </Mention>
    </Slide>
  );
}

import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Mention, Slide } from "@/components/slide-chrome";
import { FAQ } from "@/data/content";

export function Faq() {
  return (
    <Slide id="faq" n={8} headerRight="Questions fréquentes">
      <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-12">
        <Reveal as="h2" className="type-poster text-[clamp(2.6rem,11.5vw,8.5rem)] text-blue">
          Ce qu'on nous demande
        </Reveal>
        <Reveal as="p" delay={90} className="type-editorial max-w-[56ch] text-[11.5px] sm:text-[12.5px] lg:pb-3">
          Les questions qui reviennent le plus souvent au téléphone, avec les
          réponses qu'on y donne.
        </Reveal>
      </div>

      <div className="mt-8 sm:mt-10">
        {FAQ.map((item, i) => (
          <Reveal key={item.q} delay={(i % 3) * 70}>
          <details
            className="group border-t border-ink/25 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-5 py-5 font-body text-[13.5px] font-bold uppercase tracking-[0.06em] transition-colors hover:text-blue sm:text-[16px]">
              {item.q}
              <Plus
                className="mt-1 size-4 shrink-0 text-blue transition-transform duration-300 group-open:rotate-45"
                strokeWidth={2.5}
              />
            </summary>
            <p className="type-editorial max-w-[80ch] pb-6 text-[11.5px] text-ink/85 sm:text-[12.5px]">
              {item.a}
            </p>
          </details>
          </Reveal>
        ))}
        <div className="border-t border-ink/25" />
      </div>
      <Mention>
        Réponses rédigées à partir des informations publiées sur
        dis-moi-nature.fr : modalités, crédit d'impôt, carte de fidélité, zone
        d'intervention, horaires et moyens de paiement. À relire avant mise en
        ligne.
      </Mention>
    </Slide>
  );
}

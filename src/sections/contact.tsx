import * as React from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Slide } from "@/components/slide-chrome";
import { BRAND } from "@/data/content";

const ENDPOINT = "https://formspree.io/f/xojrpplv";

const PROMISES = [
  "Un seul interlocuteur : moi, du premier croquis au dernier arbuste.",
  "Réponse sous 48 h, visite du terrain dans les deux semaines.",
  "Devis détaillé poste par poste : vous pouvez en retirer des lignes.",
  "Garantie de reprise d'un an sur toutes les plantations.",
];

type State = "idle" | "sending" | "sent" | "error";

function Field({
  id,
  label,
  hint,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string }) {
  return (
    <p className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-cream/70"
      >
        {label} {hint && <span className="normal-case tracking-normal">{hint}</span>}
      </label>
      <input
        id={id}
        className="min-h-12 border border-cream/35 bg-transparent px-3 py-2 font-body text-[14px] text-cream outline-none transition placeholder:text-cream/40 focus:border-cream focus:bg-cream/5"
        {...props}
      />
    </p>
  );
}

export function Contact() {
  const [state, setState] = React.useState<State>("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setState("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Envoi refusé");
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  };

  return (
    <Slide id="devis" tone="blue" n={9} headerRight="Demande de devis">
      <div className="mt-6 grid gap-8 sm:mt-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <Reveal as="h2" className="type-poster text-[clamp(2.6rem,11.5vw,7.5rem)] text-cream">
            Parlons de
            <span className="mx-[0.1em] font-script text-[0.62em] normal-case tracking-normal">
              votre
            </span>
            jardin
          </Reveal>
          <Reveal as="p" delay={90} className="type-editorial mt-5 max-w-[58ch] text-[11.5px] text-cream/90 sm:text-[12.5px]">
            Décrivez votre terrain en trois lignes : je vous réponds sous 48 h et on
            convient d'une visite. La visite et le devis sont gratuits, et vous
            n'êtes engagé à rien.
          </Reveal>
          <ul className="mt-6 space-y-2.5">
            {PROMISES.map((line, i) => (
              <Reveal as="li" key={line} delay={i * 90} className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-cream" strokeWidth={2.5} />
                <span className="font-body text-[12px] text-cream/90 sm:text-[13px]">
                  {line}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        {state === "sent" ? (
          <div className="flex flex-col justify-center border border-cream/35 p-6 sm:p-8">
            <p className="type-poster text-[clamp(1.6rem,6vw,2.6rem)] text-cream">
              Demande envoyée
            </p>
            <p className="type-editorial mt-3 text-[11.5px] text-cream/90 sm:text-[12.5px]">
              Je vous réponds sous 48 heures pour convenir d'une visite du terrain.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] size-px overflow-hidden"
            />
            <input
              type="hidden"
              name="_subject"
              value={`Demande de devis — ${BRAND.name}`}
            />
            <Field id="f-nom" name="nom" label="Votre nom" required autoComplete="name" placeholder="Camille Durand" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="f-ville" name="commune" label="Commune" required autoComplete="address-level2" placeholder="Betton" />
              <Field id="f-projet" name="projet" label="Type de projet" required placeholder="Création, terrasse, entretien…" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="f-email" name="email" type="email" label="Votre email" required autoComplete="email" inputMode="email" placeholder="vous@email.com" />
              <Field id="f-tel" name="telephone" type="tel" label="Téléphone" hint="(optionnel)" autoComplete="tel" inputMode="tel" placeholder="06 12 34 56 78" />
            </div>
            <p className="flex flex-col gap-1.5">
              <label
                htmlFor="f-msg"
                className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-cream/70"
              >
                Votre jardin en trois lignes
              </label>
              <textarea
                id="f-msg"
                name="message"
                rows={4}
                placeholder="Surface approximative, exposition, ce qui vous gêne aujourd'hui, budget envisagé…"
                className="border border-cream/35 bg-transparent px-3 py-2 font-body text-[14px] text-cream outline-none transition placeholder:text-cream/40 focus:border-cream focus:bg-cream/5"
              />
            </p>
            <button
              type="submit"
              disabled={state === "sending"}
              className="mt-1 min-h-13 bg-cream px-6 py-4 font-body text-[12px] font-bold uppercase tracking-[0.18em] text-blue transition hover:bg-ink hover:text-cream disabled:opacity-60 sm:text-[13px]"
            >
              {state === "sending" ? "Envoi…" : "Envoyer ma demande"}
            </button>
            <p
              role="status"
              aria-live="polite"
              className="font-body text-[10.5px] font-semibold uppercase tracking-[0.14em] text-cream/65 sm:text-[11px]"
            >
              {state === "error"
                ? "L'envoi a échoué. Réessayez, ou écrivez-moi directement."
                : "Réponse sous 48 h · Visite et devis gratuits"}
            </p>
          </form>
        )}
      </div>
    </Slide>
  );
}

import * as React from "react";
import { ImagePlus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { GALLERY, photoIndex } from "@/data/gallery";
import { useGallery } from "@/components/gallery-context";

interface PhotoProps {
  /** Nom court de la photo dans GALLERY. */
  name: string;
  className?: string;
  /** Classe appliquée à l'image (position du sujet dans le cadre…). */
  imgClassName?: string;
  /** Rapport largeur/hauteur du cadre. */
  ratio?: string;
  priority?: boolean;
  /** Légende affichée sous la photo, façon planche. */
  caption?: React.ReactNode;
}

/**
 * Photo en noir et blanc : elle passe en couleur au survol, et le clic ouvre
 * l'éventail sur elle-même. Le N&B est un filtre CSS, donc la version couleur
 * est exactement le même fichier — rien à maintenir en double.
 *
 * Tant que le fichier n'a pas été déposé dans `public/images/`, un cadre
 * nommé prend sa place : la mise en page reste juste et on voit d'un coup
 * d'œil quelles photos manquent encore.
 */
export function Photo({
  name,
  className,
  imgClassName,
  ratio = "4 / 3",
  priority = false,
  caption,
}: PhotoProps) {
  const { open } = useGallery();
  const index = photoIndex(name);
  const item = GALLERY[index];
  const [missing, setMissing] = React.useState(false);

  return (
    <figure className={cn("group/photo m-0", className)}>
      <button
        type="button"
        data-photo
        onClick={() => open(index)}
        aria-label={`Voir « ${item.title ?? item.alt} » en couleur dans la galerie`}
        className="relative block w-full overflow-hidden bg-[#cfc6ad] outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        style={{ aspectRatio: ratio }}
      >
        {missing ? (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-ink/30 bg-cream-2 px-3 text-center">
            <ImagePlus className="size-5 text-ink/40" strokeWidth={1.6} />
            <span className="font-body text-[10px] font-bold uppercase leading-tight tracking-[0.14em] text-ink/55">
              {item.title}
            </span>
            <span className="font-body text-[9px] uppercase tracking-[0.12em] text-ink/35">
              {item.src.replace("images/", "")}
            </span>
          </span>
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            draggable={false}
            onError={() => setMissing(true)}
            className={cn("h-full w-full object-cover", imgClassName)}
          />
        )}
        {/* Pastille « ouvrir » — toujours visible sur tactile, où il n'y a pas de survol. */}
        {!missing && (
          <span
            aria-hidden="true"
            className="absolute bottom-2 right-2 flex size-8 items-center justify-center rounded-full bg-blue text-cream opacity-90 transition-opacity duration-300 sm:opacity-0 sm:group-hover/photo:opacity-100"
          >
            <Plus className="size-4" strokeWidth={2.5} />
          </span>
        )}
      </button>
      {caption && (
        <figcaption className="mt-2 font-body text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] text-ink/70 sm:text-[11px]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

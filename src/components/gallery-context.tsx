import * as React from "react";

interface GalleryApi {
  /** Ouvre l'éventail sur la photo demandée. */
  open: (index: number) => void;
}

const GalleryContext = React.createContext<GalleryApi | null>(null);

export const GalleryProvider = GalleryContext.Provider;

export function useGallery(): GalleryApi {
  const api = React.useContext(GalleryContext);
  if (!api) throw new Error("useGallery doit être utilisé dans <GalleryProvider>");
  return api;
}

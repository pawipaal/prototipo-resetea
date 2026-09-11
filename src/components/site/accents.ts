import type { Accent } from "@/data/products";

/** Static class maps so Tailwind can see every literal. */
export const accentBg: Record<Accent, string> = {
  pink: "bg-pink",
  amber: "bg-amber",
  lime: "bg-lime",
  peri: "bg-peri",
  orange: "bg-orange",
  sky: "bg-sky",
};

export const accentText: Record<Accent, string> = {
  pink: "text-pink-foreground",
  amber: "text-amber-foreground",
  lime: "text-lime-foreground",
  peri: "text-peri-foreground",
  orange: "text-orange-foreground",
  sky: "text-sky-foreground",
};

export const accentSoft: Record<Accent, string> = {
  pink: "bg-pink/15",
  amber: "bg-amber/20",
  lime: "bg-lime/25",
  peri: "bg-peri/15",
  orange: "bg-orange/20",
  sky: "bg-sky/40",
};

export const accentBorder: Record<Accent, string> = {
  pink: "border-pink",
  amber: "border-amber",
  lime: "border-lime",
  peri: "border-peri",
  orange: "border-orange",
  sky: "border-sky",
};

export const accentFill: Record<Accent, string> = {
  pink: "fill-pink",
  amber: "fill-amber",
  lime: "fill-lime",
  peri: "fill-peri",
  orange: "fill-orange",
  sky: "fill-sky",
};

/**
 * Color exacto por categoría (por slug, no por accent): se usa en la home,
 * en la cabecera de categoría y en el mega-menú para que todos coincidan.
 */
export const categoryBg: Record<string, string> = {
  gourmet: "bg-cat-gourmet",
  "flores-y-biodiversidad": "bg-cat-flores",
  "cultivos-para-ninos": "bg-cat-infantil",
  "kits-originales": "bg-cat-kits-originales",
  "kits-diy": "bg-cat-kits-diy",
  "papeleria-plantable": "bg-cat-papeleria",
};

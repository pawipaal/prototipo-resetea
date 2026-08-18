import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import catNovedades from "@/assets/cat-novedades.jpg";
import catGourmet from "@/assets/cat-gourmet.jpg";
import catFlores from "@/assets/cat-flores.jpg";
import catNinos from "@/assets/cat-ninos.jpg";
import catPapeleria from "@/assets/cat-papeleria.jpg";
import catKits from "@/assets/cat-kits.jpg";

export type Accent = "pink" | "amber" | "lime" | "peri" | "orange" | "sky";

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  accent: Accent;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  image: string;
  category: string;
  accent: Accent;
  badge?: string;
  occasions: string[];
  types: string[];
  rating: number;
  reviews: number;
  short: string;
  description: string;
  details: string[];
  isNew?: boolean;
  isBestseller?: boolean;
};

export const categories: Category[] = [
  {
    slug: "novedades",
    name: "Novedades",
    tagline: "Lo último que ha florecido",
    image: catNovedades,
    accent: "lime",
  },
  {
    slug: "gourmet",
    name: "Gourmet",
    tagline: "Sabor con conciencia",
    image: catGourmet,
    accent: "amber",
  },
  {
    slug: "flores-y-biodiversidad",
    name: "Flores y biodiversidad",
    tagline: "Semillas que llaman a las abejas",
    image: catFlores,
    accent: "pink",
  },
  {
    slug: "cultivos-para-ninos",
    name: "Cultivos para niños",
    tagline: "Sembrar jugando",
    image: catNinos,
    accent: "peri",
  },
  {
    slug: "papeleria-plantable",
    name: "Papelería plantable",
    tagline: "Escribe hoy, florece mañana",
    image: catPapeleria,
    accent: "sky",
  },
  {
    slug: "kits-originales",
    name: "Kits originales",
    tagline: "Regalos que nadie espera",
    image: catKits,
    accent: "orange",
  },
];

export const products: Product[] = [
  {
    slug: "bombas-de-semillas",
    name: "Bombas de semillas",
    price: 12.9,
    compareAt: 15.9,
    image: p1,
    category: "flores-y-biodiversidad",
    accent: "pink",
    badge: "Top ventas",
    occasions: ["Para mi pareja", "Sin ocasión", "Cumpleaños"],
    types: ["Kit de siembra", "Flores"],
    rating: 4.9,
    reviews: 214,
    short: "Cuatro bombas de arcilla llenas de semillas silvestres.",
    description:
      "Lánzalas a la tierra, riega y espera. Cada bomba concentra semillas de flores silvestres autóctonas que alimentan a abejas y mariposas. Sin plásticos, sin turba, hechas a mano en España.",
    details: [
      "4 bombas de arcilla y compost",
      "Mezcla de 12 flores silvestres autóctonas",
      "Caja de cartón reciclado con cinta de algodón",
      "Siembra de marzo a octubre",
    ],
    isBestseller: true,
    isNew: true,
  },
  {
    slug: "tarjeta-plantable",
    name: "Tarjeta plantable",
    price: 4.5,
    image: p2,
    category: "papeleria-plantable",
    accent: "sky",
    occasions: ["Agradecimiento", "Cumpleaños", "Boda"],
    types: ["Papelería", "Tarjetas"],
    rating: 4.8,
    reviews: 132,
    short: "Papel semilla con flores prensadas. Se siembra entera.",
    description:
      "Una felicitación que no acaba en la basura: el papel está hecho con fibra reciclada y semillas de amapola. Escribe tu mensaje, entrégala y que la planten.",
    details: [
      "Papel semilla 250 g hecho a mano",
      "Sobre de papel kraft incluido",
      "Semillas de amapola y margarita",
      "Formato A6",
    ],
    isNew: true,
  },
  {
    slug: "lapices-que-germinan",
    name: "Lápices que germinan",
    price: 9.9,
    image: p3,
    category: "papeleria-plantable",
    accent: "amber",
    occasions: ["Detalle de empresa", "Vuelta al cole", "Sin ocasión"],
    types: ["Papelería", "Kit de siembra"],
    rating: 4.7,
    reviews: 98,
    short: "Seis lápices de madera con cápsula de semillas.",
    description:
      "Cuando el lápiz se queda corto, se planta. La cápsula del extremo guarda semillas de albahaca, tomate cherry, girasol, salvia, perejil y caléndula.",
    details: [
      "6 lápices de madera certificada",
      "Cápsula biodegradable con semillas",
      "Grabado láser personalizable",
      "Atados con cordel de yute",
    ],
    isNew: true,
  },
  {
    slug: "mini-huerto-de-mesa",
    name: "Mini huerto de mesa",
    price: 18.5,
    image: p4,
    category: "cultivos-para-ninos",
    accent: "lime",
    badge: "Nuevo",
    occasions: ["Para peques", "Cumpleaños", "Sin ocasión"],
    types: ["Kit de siembra", "Macetas"],
    rating: 4.9,
    reviews: 176,
    short: "Maceta de barro, sustrato y semillas listas para brotar.",
    description:
      "Todo lo que hace falta para ver el primer brote en menos de una semana. Ideal para escritorios, alféizares y para enganchar a los peques a la jardinería.",
    details: [
      "Maceta de terracota de 8 cm",
      "Pastilla de coco prensado",
      "Semillas de albahaca genovesa",
      "Instrucciones ilustradas paso a paso",
    ],
    isNew: true,
  },
  {
    slug: "miel-ecologica-artesana",
    name: "Miel ecológica artesana",
    price: 11.0,
    image: p5,
    category: "gourmet",
    accent: "orange",
    badge: "Top ventas",
    occasions: ["Cesta gourmet", "Navidad", "Agradecimiento"],
    types: ["Gourmet"],
    rating: 4.9,
    reviews: 305,
    short: "Miel cruda de flores silvestres, de colmenas cercanas.",
    description:
      "Cosechada en frío por apicultores de la sierra, sin pasteurizar ni filtrar en exceso. Cada tarro conserva el polen y el sabor exacto de su floración.",
    details: [
      "Tarro de cristal de 250 g",
      "Certificado ecológico",
      "Sin pasteurizar",
      "Apicultura de proximidad",
    ],
    isBestseller: true,
  },
  {
    slug: "sobres-de-semillas",
    name: "Sobres de semillas",
    price: 6.9,
    image: p6,
    category: "flores-y-biodiversidad",
    accent: "peri",
    occasions: ["Detalle de boda", "Detalle de empresa", "Agradecimiento"],
    types: ["Flores", "Papelería"],
    rating: 4.8,
    reviews: 241,
    short: "Pack de 10 sobres kraft con semillas de temporada.",
    description:
      "El detalle favorito para bodas y eventos: pequeño, ligero y con vida dentro. Personalizamos el sello con tu nombre o el de tu marca.",
    details: [
      "10 sobres de papel kraft",
      "Semillas de flores de temporada",
      "Sello personalizable",
      "Fabricado en España",
    ],
    isBestseller: true,
  },
  {
    slug: "kit-jardin-para-peques",
    name: "Kit jardín para peques",
    price: 24.9,
    compareAt: 29.9,
    image: p7,
    category: "cultivos-para-ninos",
    accent: "pink",
    badge: "Top ventas",
    occasions: ["Para peques", "Cumpleaños", "Navidad"],
    types: ["Kit de siembra", "Macetas"],
    rating: 4.9,
    reviews: 188,
    short: "Herramientas, sustrato y semillas en una caja con juego.",
    description:
      "Una caja pensada para manos pequeñas: pala, sustrato prensado, semillas fáciles y una guía con retos para seguir el crecimiento día a día.",
    details: [
      "Pala infantil de bioplástico",
      "3 variedades de semillas fáciles",
      "Guía de retos ilustrada",
      "Recomendado a partir de 4 años",
    ],
    isBestseller: true,
  },
  {
    slug: "cuaderno-de-papel-semilla",
    name: "Cuaderno de papel semilla",
    price: 14.5,
    image: p8,
    category: "papeleria-plantable",
    accent: "amber",
    occasions: ["Detalle de empresa", "Agradecimiento", "Sin ocasión"],
    types: ["Papelería"],
    rating: 4.7,
    reviews: 87,
    short: "Cuaderno de tapa plantable con interior reciclado.",
    description:
      "80 páginas de papel reciclado y una tapa que se siembra cuando lo terminas. Perfecto como regalo de empresa con impresión personalizada.",
    details: [
      "80 páginas de papel reciclado",
      "Tapa de papel semilla",
      "Formato A5, cosido",
      "Impresión personalizable",
    ],
    isBestseller: true,
  },
];

export const occasionFilters = [
  "Para mi pareja",
  "Para peques",
  "Cumpleaños",
  "Detalle de boda",
  "Detalle de empresa",
  "Agradecimiento",
  "Navidad",
  "Sin ocasión",
];

export const typeFilters = [
  "Kit de siembra",
  "Papelería",
  "Flores",
  "Gourmet",
  "Macetas",
  "Tarjetas",
];

export const budgetFilters = [
  { label: "Hasta 10 €", min: 0, max: 10 },
  { label: "10 – 20 €", min: 10, max: 20 },
  { label: "Más de 20 €", min: 20, max: Infinity },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const productsByCategory = (slug: string) =>
  slug === "novedades"
    ? products.filter((p) => p.isNew)
    : products.filter((p) => p.category === slug);

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(value);

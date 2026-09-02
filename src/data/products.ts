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
    slug: "kit-autocultivo-diente-de-leon",
    name: "Kit Autocultivo Diente de León – ¡Pide un deseo!",
    price: 9.9,
    image:
      "https://resetea.es/wp-content/uploads/2020/09/Miscelanea-Resetea-Diente-de-leon-1.jpg",
    category: "kits-originales",
    accent: "sky",
    occasions: ["Sin ocasión", "Cumpleaños"],
    types: ["Kit de siembra"],
    rating: 4.9,
    reviews: 46,
    short:
      "El diente de león es una planta perenne, muy abundante en caminos y prados, de flores amarillas que se abren por el día y se cierran durante la noche. La creencia popular otorga a esta planta el poder de conceder el deseo de aquellas personas que soplen con todas sus fuerzas las flores maduras.",
    description:
      "Cada kit contiene todo lo necesario para cultivar diente de león: 1 maceta de germinación 100% biodegradable, 1 pastilla de turba, 1 bomba de semillas de diente de león y 1 ficha con los cuidados necesarios.",
    details: [
      "Maceta de germinación 100% biodegradable",
      "Pastilla de turba",
      "Bomba de semillas de diente de león",
      "Ficha con los cuidados necesarios",
      "Tamaño: 9,8 x 8,8 x 8,8 cm · Peso: 75 g",
    ],
    isNew: true,
  },
  {
    slug: "kit-autocultivo-seta-ostra",
    name: "Kit Autocultivo Seta Ostra",
    price: 23.9,
    image:
      "https://resetea.es/wp-content/uploads/2015/06/Resetea-Kit-Autocultivo-de-setas-1.jpg",
    category: "gourmet",
    accent: "amber",
    badge: "Top ventas",
    occasions: ["Sin ocasión", "Agradecimiento"],
    types: ["Kit de siembra", "Gourmet"],
    rating: 4.8,
    reviews: 312,
    short:
      "Con el café como sustrato hemos creado un kit a través del cual podrás cultivar tus propias setas sin salir de casa. Es fácil, divertido y sostenible.",
    description:
      "El kit contiene una bolsa sellada de micelio de seta ostra incubado sobre restos de café. Su uso es muy sencillo: solo tienes que arrancar la ventana de la caja, hacer un corte en la bolsa, sumergirla en agua de 24 a 36 horas, meterla de nuevo en la caja y humedecer el sustrato a diario. En pocos días comenzarán a brotar tus primeras setas. De cada kit podrás obtener hasta 3 cosechas, que rondarán los 700 g en total. Una vez terminado el cultivo, las setas convierten el sustrato en un excelente abono natural.",
    details: [
      "Bolsa sellada de micelio de seta ostra incubado sobre restos de café",
      "Hasta 3 cosechas, unos 700 g en total",
      "Actívalo dentro del primer mes desde la recepción",
      "Tamaño: 17 x 14 x 34 cm · Peso: 2 kg",
    ],
    isNew: true,
    isBestseller: true,
  },
  {
    slug: "kit-terrarium-pino",
    name: "Kit Terrarium Pino",
    price: 29.9,
    image:
      "https://resetea.es/wp-content/uploads/2026/07/Resetea-Terrarium-Pino-ES-1.webp",
    category: "kits-originales",
    accent: "lime",
    badge: "Top ventas",
    occasions: ["Sin ocasión", "Agradecimiento"],
    types: ["Kit de siembra", "Macetas"],
    rating: 4.9,
    reviews: 58,
    short:
      "Con este terrario, crearás un ecosistema en miniatura que te permitirá llevar la esencia de un bosque a tu hogar.",
    description:
      "Déjate sorprender por la belleza de un fragmento de bosque en miniatura en tu casa. El kit incluye 1 tarro de cristal, 1 sobre de semillas de pino, 1 pastilla de sustrato, grava volcánica, grava blanca y corteza de pino.",
    details: [
      "1 tarro de cristal",
      "1 sobre de semillas de pino",
      "1 pastilla de sustrato",
      "Grava volcánica y grava blanca",
      "Corteza de pino",
      "Tamaño: 16 x 21,5 cm · Peso: 1,2 kg",
    ],
    isNew: true,
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

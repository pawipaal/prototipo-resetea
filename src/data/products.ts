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
    image: "https://resetea.es/wp-content/uploads/2020/09/Miscelanea-Resetea-Diente-de-leon-1.jpg",
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
    image: "https://resetea.es/wp-content/uploads/2015/06/Resetea-Kit-Autocultivo-de-setas-1.jpg",
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
    image: "https://resetea.es/wp-content/uploads/2026/07/Resetea-Terrarium-Pino-ES-1.webp",
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
  {
    slug: "kit-cultivo-no-me-olvides",
    name: "No me olvides – Kit de cultivo de la flor del amor eterno",
    price: 7.9,
    image: "https://resetea.es/wp-content/uploads/2026/07/Resetea-No-me-olvides-ES-1.webp",
    category: "flores-y-biodiversidad",
    accent: "pink",
    occasions: ["Para mi pareja", "Sin ocasión"],
    types: ["Kit de siembra", "Flores"],
    rating: 4.7,
    reviews: 21,
    short:
      "Pequeña, delicada y llena de significado. Esta flor, conocida por sus diminutas flores azules y su resistencia, simboliza el amor eterno y la sinceridad.",
    description:
      "El regalo perfecto para demostrar afecto a una persona especial. Contiene 1 bomba de semillas de Myosotis Spp., 1 pastilla de sustrato y 1 maceta de germinación biodegradable.",
    details: [
      "1 bomba de semillas de Myosotis Spp.",
      "1 pastilla de sustrato",
      "1 maceta de germinación biodegradable",
      "Tamaño: 7 x 6,5 x 7 cm · Peso: 95 g",
    ],
    isNew: true,
  },
  {
    slug: "haz-macetas-arcilla",
    name: "Haz tus Macetas de Arcilla",
    price: 29.9,
    image: "https://resetea.es/wp-content/uploads/2026/07/Resetea-DIY-Macetas-ES-1.webp",
    category: "kits-originales",
    accent: "orange",
    occasions: ["Sin ocasión", "Detalle de empresa"],
    types: ["Macetas"],
    rating: 4.6,
    reviews: 14,
    short:
      "Crea tus propias macetas de arcilla y disfruta de una experiencia creativa, relajante y artesanal.",
    description:
      "Este kit incluye todo lo necesario para modelar, pintar y personalizar piezas únicas hechas por ti. ¡Deja fluir tu creatividad y crea piezas únicas para llenar de vida cualquier rincón!",
    details: [
      "500 g de arcilla blanca de secado al aire",
      "1 pincel y 1 herramienta de madera",
      "1 esponja para arcilla",
      "6 botes de pintura de 5 ml",
      "30 ml de barniz brillo",
      "Tamaño: 22,6 x 5,5 x 10 cm · Peso: 620 g",
    ],
    isNew: true,
  },
  {
    slug: "kit-bombas-semillas",
    name: "Haz tus Bombas de Flores",
    price: 19.9,
    image: "https://resetea.es/wp-content/uploads/2026/07/Resetea-DIY-Bombas-ES-1.webp",
    category: "kits-originales",
    accent: "lime",
    occasions: ["Sin ocasión", "Agradecimiento"],
    types: ["Kit de siembra", "Flores"],
    rating: 4.8,
    reviews: 27,
    short:
      "Crea tus propias bombas de semillas y reconecta con la tierra mientras contribuyes a hacer el mundo un poco más verde.",
    description:
      "Un kit pensado para disfrutar del proceso, ensuciarte las manos y ver cómo la naturaleza hace el resto.",
    details: [
      "140 g de arcilla",
      "2 pastillas de sustrato",
      "1 sobre de semillas de amapola",
      "1 sobre de semillas de caléndula",
      "1 sobre de semillas de centaurea",
      "Tamaño: 22,6 x 5,5 x 10 cm · Peso: 200 g",
    ],
    isNew: true,
  },
  {
    slug: "kit-adornos-navidad",
    name: "Haz tus Adornos Navideños",
    price: 29.9,
    image: "https://resetea.es/wp-content/uploads/2026/07/Resetea-DIY-Adornos-ES-1-scaled.webp",
    category: "kits-originales",
    accent: "peri",
    occasions: ["Navidad"],
    types: ["Macetas"],
    rating: 4.9,
    reviews: 12,
    short:
      "Deja volar tu creatividad y crea decoraciones únicas con arcilla para tu árbol de navidad.",
    description:
      "Un kit pensado para desconectar, moldear con tus manos y llenar tu hogar de decoraciones únicas hechas por ti.",
    details: [
      "500 g de arcilla blanca de secado al aire",
      "1 pincel, 1 herramienta y 1 rodillo de madera",
      "1 molde de metal con forma de árbol",
      "1 hoja con formas recortables",
      "2 metros de hilo de algodón",
      "6 botes de pintura de 5 ml",
      "Tamaño: 22,6 x 5,5 x 10 cm · Peso: 620 g",
    ],
    isNew: true,
  },
  {
    slug: "postales-plantables-navidenas",
    name: "Postales Plantables Navideñas",
    price: 3.9,
    image: "https://resetea.es/wp-content/uploads/2026/08/Resetea-Postales-Navidad.webp",
    category: "papeleria-plantable",
    accent: "sky",
    occasions: ["Navidad"],
    types: ["Papelería", "Tarjetas"],
    rating: 4.8,
    reviews: 33,
    short: "Celebra la Navidad con estas postales inspiradas en la magia de estas fiestas.",
    description:
      "Están fabricadas con papel de algodón reciclado con semillas para que, después de transmitir tus mejores deseos, se conviertan en una planta.",
    details: [
      "Papel de algodón reciclado con semillas",
      "Incluye sobre",
      "Tras usarla, se planta y germina",
      "Ideal para felicitar la Navidad",
    ],
    isNew: true,
  },
  {
    slug: "postales-plantables-verano",
    name: "Nuevas Postales Plantables",
    price: 3.9,
    image:
      "https://resetea.es/wp-content/uploads/2026/07/Resetea-Postales-Verano-Col-2-Grow-With-Flow-4.webp",
    category: "papeleria-plantable",
    accent: "amber",
    occasions: ["Sin ocasión", "Agradecimiento"],
    types: ["Papelería", "Tarjetas"],
    rating: 4.7,
    reviews: 19,
    short:
      "Inspiradas en los días de sol, las vacaciones y los pequeños momentos que hacen especial el verano.",
    description:
      "Cada postal está impresa sobre papel con semillas, así una vez se haya transmitido tu mensaje, se puede plantar para dar vida a una bonita planta y seguir disfrutando de un pedacito de verano mucho después de recibirla.",
    details: [
      "Papel con semillas",
      "Incluye sobre",
      "Se planta después de usarla",
      "Diseños inspirados en el verano",
    ],
    isNew: true,
  },
  {
    slug: "calendario-plantable-2027",
    name: "Calendario Plantable 2027",
    price: 18.9,
    image: "https://resetea.es/wp-content/uploads/2026/07/Resetea-Calendario-2027-ES-1.webp",
    category: "papeleria-plantable",
    accent: "lime",
    occasions: ["Sin ocasión", "Detalle de empresa"],
    types: ["Papelería"],
    rating: 4.9,
    reviews: 8,
    short: "Un calendario que florece mes a mes.",
    description:
      "Cada mes está impreso sobre papel de semillas con mix de flores, para que cuando este acabe, puedas sembrarlo y disfrutar de diferentes flores.",
    details: [
      "12 hojas de papel con semillas de mix de flores",
      "Tamaño: 11 x 15 x 1,5 cm",
      "Peso: 70 g",
    ],
    isNew: true,
  },
  {
    slug: "laminas-juani-bengali",
    name: "Láminas X Juani Bengali",
    price: 4.9,
    image: "https://resetea.es/wp-content/uploads/2026/07/Nature-Vives-Laminas-30X40-Hi-3.webp",
    category: "papeleria-plantable",
    accent: "orange",
    occasions: ["Sin ocasión", "Detalle de empresa"],
    types: ["Papelería"],
    rating: 4.8,
    reviews: 15,
    short: "Cuatro láminas exclusivas creadas junto a la ilustradora Juani Bengali.",
    description:
      "Animales, frutas, verduras y plantas cobran vida y se convierten en personajes frescos, divertidos y desenfadados. Un estilo vibrante y colorista que propone una reinterpretación alegre de la naturaleza.",
    details: [
      "Colección de 4 láminas exclusivas",
      "Ilustradas por Juani Bengali",
      "Formato 30 x 40 cm",
    ],
    isNew: true,
  },
  {
    slug: "joyas-artesanas-aurarte",
    name: "Joyas Artesanas que Limpian el Mar",
    price: 39.9,
    image: "https://resetea.es/wp-content/uploads/2026/05/Resetea-Aurarte-Pendientes.webp",
    category: "kits-originales",
    accent: "sky",
    occasions: ["Sin ocasión", "Cumpleaños"],
    types: ["Joyas"],
    rating: 4.9,
    reviews: 22,
    short:
      "Joyas artesanas hechas con materiales recuperados del mar, en colaboración con Aurarte.",
    description:
      "Estos pendientes están hechos con microplásticos, redes, cabos y vidrios recogidos en las costas gallegas. Cada pieza es única e irrepetible: joyas creadas a partir de materiales recuperados del mar que encuentran una nueva vida a través de la artesanía.",
    details: [
      "Materiales recuperados de las costas gallegas",
      "Pieza única e irrepetible",
      "Colaboración con Aurarte",
    ],
    isNew: true,
  },
  {
    slug: "pendientes-madera-nature-vives",
    name: "Nuevos Pendientes de Madera",
    price: 24.9,
    image:
      "https://resetea.es/wp-content/uploads/2026/05/Resetea-Pendientes-Verano-Palm-Tree-6.webp",
    category: "kits-originales",
    accent: "peri",
    occasions: ["Sin ocasión", "Cumpleaños"],
    types: ["Joyas"],
    rating: 4.7,
    reviews: 18,
    short: "Nueva colección de Nature Vives formada por 6 pendientes de madera.",
    description:
      "Inspirados en la esencia del mar, la costa y los días eternos bajo el sol. Déjate llevar por las vibraciones de la naturaleza.",
    details: [
      "6 diseños de pendientes de madera",
      "Colección Nature Vives",
      "Inspirados en el verano y la costa",
    ],
    isNew: true,
  },
  {
    slug: "kit-autocultivo-gourmet",
    name: "Kit Autocultivo Gourmet (perejil, albahaca y cilantro)",
    price: 20.9,
    image: "https://resetea.es/wp-content/uploads/2020/09/Gourmet-01-400x400.jpg",
    category: "gourmet",
    accent: "amber",
    badge: "Top ventas",
    occasions: ["Sin ocasión", "Agradecimiento"],
    types: ["Kit de siembra", "Gourmet"],
    rating: 4.8,
    reviews: 145,
    short:
      "Con este kit podrás cultivar 3 hierbas aromáticas indispensables para los amantes de la buena comida.",
    description:
      "Contiene todo lo necesario para el cultivo de perejil, albahaca y cilantro: 3 macetas de germinación 100% biodegradables, 3 pastillas de turba, 3 bombas de semillas envueltas en papel de seda y 3 fichas con los cuidados necesarios.",
    details: [
      "3 macetas de germinación 100% biodegradables",
      "3 pastillas de turba",
      "3 bombas de semillas envueltas en papel de seda",
      "3 fichas de cuidados",
      "Tamaño: 21 x 7,8 x 6,5 cm · Peso: 200 g",
    ],
    isBestseller: true,
  },
  {
    slug: "kit-autocultivo-diselo-con-flores-gracias",
    name: "Kit Autocultivo Díselo con Flores (Gracias)",
    price: 8.9,
    image:
      "https://resetea.es/wp-content/uploads/2020/11/Resetea-Diselo-con-flores-Gracias-5-400x400.jpg",
    category: "flores-y-biodiversidad",
    accent: "orange",
    badge: "Top ventas",
    occasions: ["Agradecimiento", "Sin ocasión"],
    types: ["Kit de siembra", "Flores"],
    rating: 4.8,
    reviews: 89,
    short:
      "¿Tienes algo que decir a alguien importante? Regálale una bonita experiencia llena de vida y de color.",
    description:
      "Contiene 1 maceta de germinación 100% biodegradable, 1 pastilla de sustrato y 1 bomba de semillas con flores silvestres naranjas (caléndula, capuchina y tagetes).",
    details: [
      "1 maceta de germinación 100% biodegradable",
      "1 pastilla de sustrato",
      "1 bomba de semillas de flores silvestres naranjas",
      "Tamaño: 8,8 x 8,8 x 8,8 cm · Peso: 95 g",
    ],
    isBestseller: true,
  },
  {
    slug: "kit-terrarium",
    name: "Kit Terrarium",
    price: 29.9,
    image: "https://resetea.es/wp-content/uploads/2025/06/Resetea-Terrarium-1-400x400.jpg",
    category: "kits-originales",
    accent: "peri",
    badge: "Top ventas",
    occasions: ["Sin ocasión", "Detalle de empresa"],
    types: ["Kit de siembra", "Macetas"],
    rating: 4.7,
    reviews: 37,
    short:
      "Un ecosistema en miniatura que te permite llevar la belleza de la naturaleza a tu hogar.",
    description:
      "Disfruta de una experiencia fácil, divertida y educativa. El kit incluye 1 tarro de cristal, 1 sobre de semillas de cóleo, 1 pastilla de sustrato, grava volcánica, grava blanca y corteza de pino.",
    details: [
      "1 tarro de cristal",
      "1 sobre de semillas de cóleo",
      "1 pastilla de sustrato",
      "Grava volcánica y grava blanca",
      "Corteza de pino",
      "Tamaño: 16 x 21,5 cm · Peso: 1,2 kg",
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
  "Joyas",
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

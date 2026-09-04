import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import heroResetea from "@/assets/hero-resetea-es.jpg";
import heroNoMeOlvides from "@/assets/hero-no-me-olvides.jpg";
import heroTerrarium from "@/assets/hero-terrarium.jpg";
import heroMacetas from "@/assets/hero-macetas.jpg";
import story from "@/assets/story.jpg";
import { budgetFilters, categories, occasionFilters, products, typeFilters } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Resetea — Regalos plantables que florecen" },
      {
        name: "description",
        content:
          "Pide un deseo y plántalo: kits de siembra, papelería plantable y regalos ecológicos hechos en España. Envío gratis desde 30 €.",
      },
      { property: "og:title", content: "Resetea — Regalos plantables que florecen" },
      {
        property: "og:description",
        content: "Kits de siembra, papelería plantable y regalos ecológicos hechos en España.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const slides = [
  {
    image: heroResetea,
    title: "Pide un deseo",
    text: "Cultiva tu diente de león en casa con este kit completo y espera a que llegue el momento de soplar y pedir un deseo.",
  },
  {
    image: heroNoMeOlvides,
    title: "No me olvides",
    text: "Pequeña, delicada y llena de significado. Esta flor, conocida por sus diminutas flores azules y su resistencia, simboliza el amor eterno y la sinceridad, lo que la convierte en el regalo perfecto para demostrar afecto a una persona especial.",
  },
  {
    image: heroTerrarium,
    title: "Kit Terrarium Pino",
    text: "Con este terrario, crearás un ecosistema en miniatura que te permitirá llevar la esencia de un bosque a tu hogar. Déjate sorprender por la belleza de un fragmento de bosque en miniatura en tu casa.",
  },
  {
    image: heroMacetas,
    title: "Haz tus macetas de arcilla",
    text: "Crea tus propias macetas de arcilla y disfruta de una experiencia creativa, relajante y artesanal. Este kit incluye todo lo necesario para modelar, pintar y personalizar piezas únicas hechas por ti. ¡Deja fluir tu creatividad y crea piezas únicas para llenar de vida cualquier rincón!",
  },
];

function SymbolSostenibles({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        fill="rgb(61.177063%, 53.334045%, 92.156982%)"
        fillOpacity={1}
        d="M 431.917969 89.75 C 431.824219 89.648438 431.746094 89.535156 431.652344 89.433594 C 429.816406 87.453125 427.859375 85.660156 425.847656 83.960938 C 384.648438 45.804688 329.582031 22.421875 269.128906 22.421875 C 257.367188 22.421875 245.550781 23.316406 234.007812 25.082031 C 230.445312 25.625 227 26.464844 223.683594 27.546875 C 213.046875 20.101562 200.25 15.839844 186.800781 15.839844 C 184.714844 15.839844 182.613281 15.941406 180.496094 16.148438 C 171.285156 17.046875 88.875 26.746094 34.40625 88.863281 C 7.015625 120.105469 -4.859375 160.941406 1.820312 200.894531 C 6.515625 228.945312 19.738281 253.855469 39.121094 272.480469 C 48.914062 390.832031 148.292969 484.160156 269.128906 484.160156 C 324.929688 484.160156 376.164062 464.257812 416.121094 431.1875 C 418.152344 429.613281 420.105469 427.945312 421.9375 426.148438 C 451.375 400.09375 474.109375 366.671875 487.261719 328.785156 C 488.007812 326.882812 488.664062 324.9375 489.234375 322.957031 C 496.210938 300.964844 500 277.566406 500 253.292969 C 500 189.449219 473.945312 131.582031 431.917969 89.75 "
      />
      <path
        fill="none"
        strokeWidth={32.213}
        strokeLinecap="round"
        strokeLinejoin="miter"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M 0.00080625 0.00016875 C 8.274244 1.265794 16.750806 1.922044 25.379713 1.922044 C 117.305494 1.922044 191.825025 -72.597487 191.825025 -164.523269 C 191.825025 -256.445144 117.305494 -330.968581 25.379713 -330.968581 C -66.546069 -330.968581 -141.0656 -256.445144 -141.0656 -164.523269 C -141.0656 -118.558425 -122.436694 -76.94905 -92.3156 -46.827956 "
        transform="matrix(1, 0, 0, -1, 243.7531, 88.7697)"
      />
      <path
        fill="none"
        strokeWidth={32.213}
        strokeLinecap="round"
        strokeLinejoin="miter"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M 0.00010625 0.000875 C -12.523331 -11.588969 -28.745988 -55.799906 -61.570206 -48.51475 C -107.8788 -38.237406 -144.269425 -59.174906 -140.042863 -78.26475 C -128.074113 -132.280375 -73.203019 -77.206156 -17.398331 -141.522562 C 5.054794 -167.397562 25.504012 -172.440531 42.949325 -171.940531 "
        transform="matrix(1, 0, 0, -1, 384.3788, 133.204)"
      />
      <path
        fill="none"
        strokeWidth={32.213}
        strokeLinecap="round"
        strokeLinejoin="miter"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M 0.00045 0.00119375 C 0.336388 23.239475 -12.890175 40.829319 -29.401894 52.821506 C -54.487831 71.040256 -94.151894 67.403537 -114.671425 45.751194 C -133.362831 26.032444 -131.069862 6.969944 -104.019081 4.282444 C -78.577675 1.759006 -69.089394 0.8176 -71.026894 -33.799588 "
        transform="matrix(1, 0, 0, -1, 376.8433, 380.1926)"
      />
      <path
        fill="none"
        strokeWidth={32.213}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M -0.00053125 0.00118125 C -19.402875 -30.510537 -57.94975 -42.276162 -89.336469 -24.323037 C -120.719281 -6.369912 -132.688031 42.891806 -101.254437 78.739463 C -62.023969 123.48165 2.667438 129.805869 2.667438 129.805869 C 2.667438 129.805869 33.42525 52.559775 -0.00053125 0.00118125 Z M -0.00053125 0.00118125 "
        transform="matrix(1, 0, 0, -1, 184.106, 210.0754)"
      />
    </svg>
  );
}

function SymbolNaturales({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        fill="rgb(41.175842%, 71.372986%, 32.940674%)"
        fillOpacity={1}
        d="M 420.816406 312.203125 C 432.679688 286.703125 453.6875 209.875 392.710938 47.589844 C 385.988281 29.71875 372.746094 16.179688 356.671875 8.703125 C 340.597656 1.222656 321.703125 -0.191406 303.710938 6.1875 C 140.304688 64.085938 95.074219 129.640625 83.210938 155.144531 C 47.75 231.367188 68.515625 319.554688 128.308594 372.78125 C 131.207031 422.382812 160.535156 468.914062 208.652344 491.300781 C 243.742188 507.625 285.414062 492.410156 301.738281 457.320312 C 308.652344 442.460938 309.863281 426.429688 306.347656 411.632812 C 355.132812 396.710938 397.65625 361.988281 420.816406 312.203125 "
      />
      <path
        fill="none"
        strokeWidth={35.038}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M -0.00165625 0.00096875 C -27.048531 -58.13575 -96.103219 -83.342781 -154.239937 -56.295906 C -212.376656 -29.249031 -237.579781 39.805656 -210.532906 97.942375 C -183.486031 156.079094 -30.161812 210.407219 -30.161812 210.407219 C -30.161812 210.407219 27.045219 58.137687 -0.00165625 0.00096875 Z M -0.00165625 0.00096875 "
        transform="matrix(1, 0, 0, -1, 357.279, 282.6455)"
      />
      <path
        fill="none"
        strokeWidth={35.038}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M -0.00183125 -0.000925 L -82.337769 -176.9853 C -98.494019 -211.715769 -83.439331 -252.969675 -48.708863 -269.125925 "
        transform="matrix(1, 0, 0, -1, 286.9198, 158.6397)"
      />
      <path
        fill="none"
        strokeWidth={35.038}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M 0.000575 0.00168125 L -36.874425 73.7009 "
        transform="matrix(1, 0, 0, -1, 226.2963, 288.9509)"
      />
      <path
        fill="none"
        strokeWidth={35.038}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M 0.00021875 0.000575 L 70.765844 29.145106 "
        transform="matrix(1, 0, 0, -1, 245.1365, 248.4537)"
      />
    </svg>
  );
}

function SymbolOriginales({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        fill="rgb(96.862793%, 66.667175%, 5.882263%)"
        fillOpacity={1}
        d="M 408.84375 133.917969 C 395.507812 86.371094 364.261719 47.210938 320.855469 23.648438 C 278.109375 0.441406 229.339844 -4.707031 182.496094 9.316406 C 135.492188 21.839844 96.214844 51.457031 71.773438 93.5 C 46.949219 136.199219 40.625 185.898438 53.960938 233.441406 C 66.703125 278.878906 95.949219 316.808594 136.507812 340.640625 C 139.871094 350.203125 145.058594 358.683594 151.515625 365.867188 C 150.824219 374.5 151.53125 383.378906 154.007812 392.203125 C 160.207031 414.316406 175.671875 431.300781 195.003906 440.238281 C 195.398438 442.289062 195.824219 444.34375 196.398438 446.390625 C 207.640625 486.476562 249.25 509.855469 289.332031 498.613281 L 345.683594 482.8125 C 385.765625 471.570312 409.148438 429.964844 397.90625 389.878906 C 397.332031 387.832031 396.628906 385.855469 395.898438 383.898438 C 407.761719 366.210938 412.140625 343.660156 405.9375 321.546875 C 403.464844 312.726562 399.449219 304.773438 394.375 297.757812 C 396.15625 288.261719 396.175781 278.320312 394.070312 268.398438 C 416.324219 226.949219 421.582031 179.34375 408.84375 133.917969 "
      />
      <path
        fill="none"
        strokeWidth={37.689}
        strokeLinecap="round"
        strokeLinejoin="miter"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M -0.0010375 -0.0016625 L 56.350525 15.803025 "
        transform="matrix(1, 0, 0, -1, 268.9776, 426.0374)"
      />
      <path
        fill="none"
        strokeWidth={37.689}
        strokeLinecap="round"
        strokeLinejoin="miter"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M -0.00166875 0.00185 L 106.775675 29.943256 "
        transform="matrix(1, 0, 0, -1, 226.5837, 371.8456)"
      />
      <path
        fill="none"
        strokeWidth={37.689}
        strokeLinecap="round"
        strokeLinejoin="miter"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M 0.00119375 0.0002875 C -0.533963 1.742475 -0.975369 3.472944 -1.33865 5.179975 C -4.522244 20.183881 -1.264431 35.855756 6.266819 49.222944 C 19.5676 72.832319 23.84885 101.519819 15.950412 129.672163 C -0.100369 186.91435 -60.299588 219.875288 -117.448025 202.031538 C -175.541775 187.558881 -209.823025 128.10185 -193.768338 70.859663 C -185.873806 42.703413 -167.299588 20.426069 -143.658963 7.176069 C -130.280056 -0.323931 -119.346463 -12.019244 -114.260525 -26.4919 C -113.6824 -28.136431 -113.162869 -29.843462 -112.71365 -31.609087 "
        transform="matrix(1, 0, 0, -1, 320.3074, 283.9456)"
      />
    </svg>
  );
}

const values = [
  { icon: SymbolSostenibles, label: "Sostenibles" },
  { icon: SymbolOriginales, label: "Originales" },
  { icon: SymbolNaturales, label: "Naturales" },
];

function Hero() {
  const [i, setI] = useState(0);

  const go = (dir: 1 | -1) => setI((v) => (v + dir + slides.length) % slides.length);
  const slide = slides[i] ?? slides[0]!;

  return (
    <section className="bg-background px-4 py-6 md:px-8 md:py-10">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem]">
        <div className="relative min-h-[480px] md:min-h-[640px]">
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 size-full object-cover"
          />

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Imagen anterior"
            className="absolute top-1/2 left-4 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-forest text-forest-foreground transition hover:scale-110 sm:left-6"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Imagen siguiente"
            className="absolute top-1/2 right-4 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-forest text-forest-foreground transition hover:scale-110 sm:right-6"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="relative mx-auto flex min-h-[480px] max-w-7xl flex-col items-start justify-center px-4 py-20 text-left sm:pl-[48%] md:min-h-[640px] md:px-12 md:pl-[48%]">
            <motion.h1
              key={`title-${i}`}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none max-w-4xl font-display text-5xl text-white sm:text-7xl lg:text-8xl"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              key={`text-${i}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="pointer-events-none mt-6 max-w-md text-base font-semibold text-white sm:text-lg"
            >
              {slide.text}
            </motion.p>
            <Link
              to="/tienda"
              className="pointer-events-auto mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 font-display text-sm text-amber-foreground transition hover:scale-105"
            >
              Comprar ahora
            </Link>
          </div>

          <div
            className={cn(
              "absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2",
              slides.length < 2 && "hidden",
            )}
          >
            {slides.map((s, idx) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Imagen ${idx + 1}`}
                onClick={() => setI(idx)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  idx === i ? "w-8 bg-forest" : "w-2.5 bg-forest/30",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children, to }: { children: string; to?: "/tienda" }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <h2 className="font-display text-4xl sm:text-6xl">{children}</h2>
      {to ? (
        <Link
          to={to}
          className="rounded-full px-5 py-2 font-display text-xs transition hover:bg-forest hover:text-forest-foreground"
        >
          Ver todo
        </Link>
      ) : null}
    </div>
  );
}

function GiftFinder() {
  const [occasion, setOccasion] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  const chip = (active: boolean) =>
    cn(
      "rounded-full px-4 py-2 font-display text-xs transition",
      active ? "bg-forest text-forest-foreground scale-105" : "bg-cream hover:bg-amber",
    );

  const groups = [
    { title: "Ocasión", items: occasionFilters, value: occasion, set: setOccasion },
    { title: "Tipo de producto", items: typeFilters, value: type, set: setType },
    {
      title: "Presupuesto",
      items: budgetFilters.map((b) => b.label),
      value: budget,
      set: setBudget,
    },
  ];

  return (
    <section className="bg-background px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-lilac text-forest">
        <div className="px-6 py-16 md:px-12 md:py-24">
          <h2 className="max-w-3xl font-display text-4xl sm:text-6xl">
            Encuentra el regalo perfecto
          </h2>
          <p className="mt-3 max-w-md font-semibold">
            Dinos para quién es y te enseñamos lo que más florece.
          </p>

          <label className="mt-8 flex max-w-xl items-center gap-3 rounded-full bg-cream px-5 py-3.5">
            <Search className="size-4" />
            <input
              type="search"
              placeholder="¿Qué estás buscando?"
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>

          <div className="mt-10 space-y-7">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="font-display text-sm">{g.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => g.set(g.value === item ? null : item)}
                      className={chip(g.value === item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/tienda"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 font-display text-sm text-forest-foreground transition hover:scale-105"
          >
            Ver resultados <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const HOME_NOVEDADES_SLUGS = [
  "kit-cultivo-no-me-olvides",
  "haz-macetas-arcilla",
  "postales-plantables-navidenas",
  "calendario-plantable-2027",
];

function Home() {
  const novedades = HOME_NOVEDADES_SLUGS.map((slug) =>
    products.find((p) => p.slug === slug),
  ).filter((p): p is (typeof products)[number] => Boolean(p));
  const ventas = products.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <main>
      <Hero />

      <section className="relative overflow-hidden bg-[#abd4ff]">
        <svg
          aria-hidden
          className="absolute inset-x-0 top-0 h-8 w-full text-background sm:h-14"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,50 C90,10 180,10 270,50 C360,90 450,90 540,50 C630,10 720,10 810,50 C900,90 990,90 1080,50 C1170,10 1260,10 1350,50 C1395,70 1420,60 1440,50 L1440,0 L0,0 Z"
          />
        </svg>
        <svg
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-8 w-full text-background sm:h-14"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,50 C90,90 180,90 270,50 C360,10 450,10 540,50 C630,90 720,90 810,50 C900,10 990,10 1080,50 C1170,90 1260,90 1350,50 C1395,30 1420,40 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:grid-cols-3 sm:py-28">
          {values.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.08} className="text-center">
              <v.icon className="mx-auto size-28 transition-transform duration-500 ease-out hover:rotate-12" />
              <h3 className="mt-5 font-display text-xl">{v.label}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionTitle>Compra por categoría</SectionTitle>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  to="/categoria/$slug"
                  params={{ slug: c.slug }}
                  className="group relative block overflow-hidden rounded-3xl"
                >
                  <div className="tint-lilac relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      width={900}
                      height={675}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <span
                    className={cn(
                      "sticker-oval absolute bottom-4 left-4 px-5 py-3 font-display text-sm transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110",
                      i % 3 === 0
                        ? "bg-amber text-amber-foreground"
                        : i % 3 === 1
                          ? "bg-pink text-pink-foreground"
                          : "bg-cream text-forest",
                    )}
                  >
                    {c.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pink text-pink-foreground">
        <svg
          aria-hidden
          className="absolute inset-x-0 top-0 h-8 w-full text-background sm:h-14"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,50 C90,10 180,10 270,50 C360,90 450,90 540,50 C630,10 720,10 810,50 C900,90 990,90 1080,50 C1170,10 1260,10 1350,50 C1395,70 1420,60 1440,50 L1440,0 L0,0 Z"
          />
        </svg>
        <svg
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-8 w-full text-background sm:h-14"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,50 C90,90 180,90 270,50 C360,10 450,10 540,50 C630,90 720,90 810,50 C900,10 990,10 1080,50 C1170,90 1260,90 1350,50 C1395,30 1420,40 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <SectionTitle>Novedades</SectionTitle>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {novedades.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionTitle to="/tienda">Súper ventas</SectionTitle>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ventas.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <GiftFinder />

      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2">
          <Reveal>
            <img
              src={story}
              alt="El taller de Resetea"
              loading="lazy"
              width={1000}
              height={1000}
              className="blob-mask aspect-square w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-6xl">Nuestra historia</h2>
            <p className="mt-5 font-semibold opacity-90">
              Empezamos en un taller pequeño con una idea grande: que un regalo pueda seguir vivo
              después de abrirlo. Hoy fabricamos papel semilla y kits de siembra en España, con
              materiales que vuelven a la tierra y personas que los cuidan.
            </p>
            <Link
              to="/nuestra-historia"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 font-display text-sm text-amber-foreground transition hover:scale-105"
            >
              Leer más <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <Reveal className="bg-amber px-6 py-16 text-amber-foreground md:px-12">
          <h3 className="font-display text-3xl sm:text-5xl">¿Tienes una tienda?</h3>
          <p className="mt-3 max-w-sm font-semibold">
            Vende Resetea en tu espacio con condiciones mayoristas.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-display text-sm text-forest-foreground transition hover:scale-105"
          >
            Hablemos <ArrowRight className="size-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.08} className="bg-pink px-6 py-16 text-pink-foreground md:px-12">
          <h3 className="font-display text-3xl sm:text-5xl">Personalizados</h3>
          <p className="mt-3 max-w-sm font-semibold">
            Personalizamos semillas, mensajes y packaging para tu marca o evento.
         </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-display text-sm text-forest-foreground transition hover:scale-105"
          >
            Pide presupuesto <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

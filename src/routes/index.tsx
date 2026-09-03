import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import heroResetea from "@/assets/hero-resetea-es.jpg";
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

const slides = [heroResetea];

function SymbolSostenibles({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        fill="rgb(74.510193%, 70.980835%, 85.098267%)"
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
        fill="rgb(0%, 71.372986%, 88.627625%)"
        fillOpacity={1}
        d="M 436.175781 248.121094 C 436.175781 219.996094 422.816406 141.476562 299.074219 20.058594 C 285.445312 6.6875 267.722656 0 249.996094 0 C 232.269531 0 214.539062 6.6875 200.914062 20.058594 C 77.183594 141.480469 63.824219 219.996094 63.824219 248.121094 C 63.824219 332.195312 119.847656 403.394531 196.515625 426.433594 C 220.066406 470.183594 266.285156 500 319.355469 500 C 358.054688 500 389.421875 468.628906 389.421875 429.925781 C 389.421875 413.535156 383.757812 398.492188 374.328125 386.558594 C 412.265625 352.449219 436.175781 303.03125 436.175781 248.121094 "
      />
      <path
        fill="none"
        strokeWidth={35.038}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M -0.00144375 -0.001 C -0.00144375 -64.118188 -51.981912 -116.098656 -116.0991 -116.098656 C -180.220194 -116.098656 -232.200662 -64.118188 -232.200662 -0.001 C -232.200662 64.120094 -116.0991 178.049781 -116.0991 178.049781 C -116.0991 178.049781 -0.00144375 64.120094 -0.00144375 -0.001 Z M -0.00144375 -0.001 "
        transform="matrix(1, 0, 0, -1, 366.0991, 248.124)"
      />
      <path
        fill="none"
        strokeWidth={35.038}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M 0.0013 0.0008125 L 0.0013 -195.198406 C 0.0013 -233.503094 31.052081 -264.557781 69.356769 -264.557781 "
        transform="matrix(1, 0, 0, -1, 249.9987, 165.368)"
      />
      <path
        fill="none"
        strokeWidth={35.038}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M 0.0013 0.00085625 L -64.522138 51.270387 "
        transform="matrix(1, 0, 0, -1, 249.9987, 309.0907)"
      />
    </svg>
  );
}

function SymbolOriginales({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        fill="rgb(94.117737%, 54.118347%, 70.196533%)"
        fillOpacity={1}
        d="M 434.285156 181.121094 C 434.285156 131.742188 414.777344 85.597656 379.347656 51.191406 C 344.453125 17.300781 298.886719 -0.824219 249.996094 0.0273438 C 201.355469 -0.601562 155.539062 17.304688 120.652344 51.1875 C 85.222656 85.59375 65.714844 131.742188 65.714844 181.121094 C 65.714844 228.3125 83.632812 272.730469 116.246094 306.628906 C 116.90625 316.742188 119.609375 326.308594 123.886719 334.96875 C 120.890625 343.09375 119.175781 351.835938 119.175781 361 C 119.175781 383.964844 129.476562 404.496094 145.675781 418.320312 C 145.503906 420.402344 145.359375 422.496094 145.359375 424.621094 C 145.359375 466.253906 179.109375 500 220.738281 500 L 279.261719 500 C 320.890625 500 354.640625 466.253906 354.640625 424.621094 C 354.640625 422.496094 354.496094 420.402344 354.324219 418.320312 C 370.523438 404.496094 380.824219 383.964844 380.824219 361 C 380.824219 351.835938 379.109375 343.09375 376.113281 334.96875 C 380.394531 326.304688 383.097656 316.738281 383.753906 306.621094 C 416.367188 272.71875 434.285156 228.300781 434.285156 181.121094 "
      />
      <path
        fill="none"
        strokeWidth={37.689}
        strokeLinecap="round"
        strokeLinejoin="miter"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M 0.00108125 0.00140625 L 58.524519 0.00140625 "
        transform="matrix(1, 0, 0, -1, 220.7372, 424.6225)"
      />
      <path
        fill="none"
        strokeWidth={37.689}
        strokeLinecap="round"
        strokeLinejoin="miter"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M -0.00081875 0.00010625 L 110.893712 0.00010625 "
        transform="matrix(1, 0, 0, -1, 194.5516, 360.9962)"
      />
      <path
        fill="none"
        strokeWidth={37.689}
        strokeLinecap="round"
        strokeLinejoin="miter"
        stroke="rgb(24.313354%, 12.940979%, 6.666565%)"
        strokeOpacity={1}
        strokeMiterlimit={10}
        d="M 0.00195 0.00173125 C -0.044925 1.822044 -0.00195625 3.6072 0.107419 5.349387 C 1.0957 20.654075 8.466794 34.865012 19.322263 45.70095 C 38.505856 64.841575 50.37695 91.310325 50.37695 120.548606 C 50.37695 180.001731 1.31445 227.990012 -58.5293 226.243919 C -118.37305 227.990012 -167.43555 180.001731 -167.43555 120.548606 C -167.43555 91.310325 -155.568362 64.841575 -136.384769 45.70095 C -125.525394 34.865012 -118.158206 20.654075 -117.169925 5.349387 C -117.056644 3.6072 -117.017581 1.822044 -117.06055 0.00173125 "
        transform="matrix(1, 0, 0, -1, 308.5293, 301.6697)"
      />
    </svg>
  );
}

const values = [
  {
    icon: SymbolSostenibles,
    label: "Sostenibles",
    text: "Materiales que vuelven a la tierra",
  },
  {
    icon: SymbolNaturales,
    label: "Naturales",
    text: "Semillas ecológicas certificadas",
  },
  {
    icon: SymbolOriginales,
    label: "Originales",
    text: "Diseño propio, hecho a mano",
  },
];

function Hero() {
  const [i, setI] = useState(0);

  const go = (dir: 1 | -1) => setI((v) => (v + dir + slides.length) % slides.length);

  return (
    <section className="bg-background px-4 py-6 md:px-8 md:py-10">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem]">
        <div className="relative min-h-[480px] md:min-h-[640px]">
          <img
            src={slides[i] ?? slides[0]}
            alt="Regalos plantables Resetea"
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
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl font-display text-5xl text-white sm:text-7xl lg:text-8xl"
            >
              Pide un deseo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-6 max-w-md text-base font-semibold text-white sm:text-lg"
            >
              Cultiva tu diente de león en casa con este kit completo y espera a que llegue el
              momento de soplar y pedir un deseo.
            </motion.p>
            <Link
              to="/tienda"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 font-display text-sm text-amber-foreground transition hover:scale-105"
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
                key={s}
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

      <section className="relative overflow-hidden bg-[#84b55b]">
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
              <v.icon className="mx-auto size-28" />
              <h3 className="mt-5 font-display text-xl">{v.label}</h3>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">{v.text}</p>
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

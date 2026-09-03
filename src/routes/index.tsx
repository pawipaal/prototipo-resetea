import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Recycle,
  Search,
  Sparkles,
  Sprout,
} from "lucide-react";
import heroResetea from "@/assets/hero-resetea-es.jpg";
import story from "@/assets/story.jpg";
import { budgetFilters, categories, occasionFilters, products, typeFilters } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { Sticker } from "@/components/site/Sticker";
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

const values = [
  {
    icon: Recycle,
    label: "Sostenibles",
    text: "Materiales que vuelven a la tierra",
    color: "yellow" as const,
    shape: "blob" as const,
  },
  {
    icon: Leaf,
    label: "Naturales",
    text: "Semillas ecológicas certificadas",
    color: "pink" as const,
    shape: "flower" as const,
  },
  {
    icon: Sparkles,
    label: "Originales",
    text: "Diseño propio, hecho a mano",
    color: "lilac" as const,
    shape: "oval" as const,
  },
  {
    icon: Sprout,
    label: "Responsables",
    text: "Producción local en España",
    color: "cream" as const,
    shape: "arch" as const,
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
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 font-display text-sm text-amber-foreground uppercase transition hover:scale-105"
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
      <h2 className="font-display text-4xl uppercase sm:text-6xl">{children}</h2>
      {to ? (
        <Link
          to={to}
          className="rounded-full px-5 py-2 font-display text-xs uppercase transition hover:bg-forest hover:text-forest-foreground"
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
      "rounded-full px-4 py-2 font-display text-xs uppercase transition",
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
    <section className="bg-lilac text-forest">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="max-w-3xl font-display text-4xl uppercase sm:text-6xl">
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
              <h3 className="font-display text-sm uppercase">{g.title}</h3>
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
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 font-display text-sm text-forest-foreground uppercase transition hover:scale-105"
        >
          Ver resultados <ArrowRight className="size-4" />
        </Link>
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

      <section className="bg-[#84b55b]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.08} className="text-center">
              <Sticker
                shape={v.shape}
                color={v.color}
                rotate={i % 2 ? 5 : -5}
                className="mx-auto size-28"
              >
                <v.icon className="size-10 text-forest" />
              </Sticker>
              <h3 className="mt-5 font-display text-xl uppercase">{v.label}</h3>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionTitle>Novedades</SectionTitle>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {novedades.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pink text-pink-foreground">
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
                      "sticker-oval absolute bottom-4 left-4 px-5 py-3 font-display text-sm uppercase transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110",
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
            <h2 className="font-display text-4xl uppercase sm:text-6xl">Nuestra historia</h2>
            <p className="mt-5 font-semibold opacity-90">
              Empezamos en un taller pequeño con una idea grande: que un regalo pueda seguir vivo
              después de abrirlo. Hoy fabricamos papel semilla y kits de siembra en España, con
              materiales que vuelven a la tierra y personas que los cuidan.
            </p>
            <Link
              to="/nuestra-historia"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 font-display text-sm text-amber-foreground uppercase transition hover:scale-105"
            >
              Leer más <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <Reveal className="bg-amber px-6 py-16 text-amber-foreground md:px-12">
          <h3 className="font-display text-3xl uppercase sm:text-5xl">¿Tienes una tienda?</h3>
          <p className="mt-3 max-w-sm font-semibold">
            Vende Resetea en tu espacio con condiciones mayoristas.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-display text-sm text-forest-foreground uppercase transition hover:scale-105"
          >
            Hablemos <ArrowRight className="size-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.08} className="bg-pink px-6 py-16 text-pink-foreground md:px-12">
          <h3 className="font-display text-3xl uppercase sm:text-5xl">Personalizados</h3>
          <p className="mt-3 max-w-sm font-semibold">
            Personalizamos semillas, mensajes y packaging para tu marca o evento.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-display text-sm text-forest-foreground uppercase transition hover:scale-105"
          >
            Pide presupuesto <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

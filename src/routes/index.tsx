import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Leaf, Recycle, Search, Sparkles, Sprout } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import story from "@/assets/story.jpg";
import {
  budgetFilters,
  categories,
  occasionFilters,
  products,
  typeFilters,
} from "@/data/products";
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

const slides = [hero1, hero2];

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

const heroStickers = [
  {
    to: "/tienda" as const,
    label: "Ver\ntienda",
    shape: "oval" as const,
    color: "yellow" as const,
    rotate: -8,
    className: "left-[6%] top-[18%] w-32 h-32 sm:w-40 sm:h-40",
  },
  {
    to: "/categoria/$slug" as const,
    params: { slug: categories[0]?.slug ?? "kits" },
    label: "Kits de\nsiembra",
    shape: "flower" as const,
    color: "pink" as const,
    rotate: 6,
    className: "right-[8%] top-[12%] w-32 h-32 sm:w-40 sm:h-40",
  },
  {
    to: "/nuestra-historia" as const,
    label: "Nuestra\nhistoria",
    shape: "slant" as const,
    color: "cream" as const,
    rotate: -3,
    className: "right-[14%] bottom-[12%] w-40 h-20 sm:w-52 sm:h-24",
  },
];

function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate overflow-hidden border-b-[3px] border-forest bg-lilac">
      <div className="relative min-h-[560px] md:min-h-[720px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[i]}
            src={slides[i] ?? slides[0]}
            alt="Regalos plantables Resetea"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 size-full object-cover mix-blend-luminosity"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-lilac/35" aria-hidden />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center md:min-h-[720px]">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-display text-5xl text-forest sm:text-7xl lg:text-8xl"
          >
            Pide un deseo
            <br />y plántalo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 max-w-md text-base font-semibold text-forest sm:text-lg"
          >
            Regalos que se plantan, crecen y se recuerdan. Papel semilla y kits hechos a mano en
            España.
          </motion.p>
          <Link
            to="/tienda"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-[3px] border-forest bg-forest px-8 py-4 font-display text-sm text-forest-foreground uppercase transition hover:scale-105"
          >
            Comprar ahora <ArrowRight className="size-4" />
          </Link>
        </div>

        {heroStickers.map((s) => (
          <div key={s.label} className={cn("absolute hidden lg:block", s.className)}>
            <Link
              to={s.to}
              params={s.params as never}
              className="block size-full float-soft focus-visible:outline-none"
            >
              <Sticker
                shape={s.shape}
                color={s.color}
                rotate={s.rotate}
                className="size-full border-[3px] border-forest whitespace-pre-line"
              >
                {s.label}
              </Sticker>
            </Link>
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((s, idx) => (
            <button
              key={s}
              type="button"
              aria-label={`Imagen ${idx + 1}`}
              onClick={() => setI(idx)}
              className={cn(
                "h-2.5 rounded-full border-2 border-forest transition-all",
                idx === i ? "w-8 bg-forest" : "w-2.5 bg-transparent",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Envío gratis desde 30 €", "Papel semilla", "Hecho en España", "Planta y florece"];
  return (
    <div className="overflow-hidden border-b-[3px] border-forest bg-amber py-3 text-amber-foreground">
      <div className="marquee-track whitespace-nowrap font-display text-lg uppercase sm:text-2xl">
        {[0, 1].map((k) => (
          <span key={k} className="flex shrink-0">
            {items.map((t) => (
              <span key={t} className="px-6">
                {t} <span className="text-forest">✱</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ children, to }: { children: string; to?: "/tienda" }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <h2 className="font-display text-4xl uppercase sm:text-6xl">{children}</h2>
      {to ? (
        <Link
          to={to}
          className="rounded-full border-[3px] border-forest px-5 py-2 font-display text-xs uppercase transition hover:bg-forest hover:text-forest-foreground"
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
      "rounded-full border-[3px] border-forest px-4 py-2 font-display text-xs uppercase transition",
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
    <section className="border-y-[3px] border-forest bg-lilac text-forest">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="max-w-3xl font-display text-4xl uppercase sm:text-6xl">
          Encuentra el regalo perfecto
        </h2>
        <p className="mt-3 max-w-md font-semibold">
          Dinos para quién es y te enseñamos lo que más florece.
        </p>

        <label className="mt-8 flex max-w-xl items-center gap-3 rounded-full border-[3px] border-forest bg-cream px-5 py-3.5">
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
          className="mt-10 inline-flex items-center gap-2 rounded-full border-[3px] border-forest bg-forest px-8 py-4 font-display text-sm text-forest-foreground uppercase transition hover:scale-105"
        >
          Ver resultados <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function Home() {
  const novedades = products.filter((p) => p.isNew).slice(0, 4);
  const ventas = products.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <main>
      <Hero />
      <Marquee />

      <section className="border-b-[3px] border-forest bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.08} className="text-center">
              <Sticker
                shape={v.shape}
                color={v.color}
                rotate={i % 2 ? 5 : -5}
                className="mx-auto size-28 border-[3px] border-forest"
              >
                <v.icon className="size-10 text-forest" />
              </Sticker>
              <h3 className="mt-5 font-display text-xl uppercase">{v.label}</h3>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b-[3px] border-forest bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionTitle to="/tienda">Novedades</SectionTitle>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {novedades.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-forest bg-pink text-pink-foreground">
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

      <section className="border-b-[3px] border-forest bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionTitle>Compra por categoría</SectionTitle>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  to="/categoria/$slug"
                  params={{ slug: c.slug }}
                  className="group relative block overflow-hidden rounded-3xl border-[3px] border-forest"
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
                      "sticker-oval absolute bottom-4 left-4 border-[3px] border-forest px-5 py-3 font-display text-sm uppercase transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110",
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

      <section className="border-b-[3px] border-forest bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2">
          <Reveal>
            <img
              src={story}
              alt="El taller de Resetea"
              loading="lazy"
              width={1000}
              height={1000}
              className="blob-mask aspect-square w-full border-[3px] border-cream object-cover"
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
              className="mt-8 inline-flex items-center gap-2 rounded-full border-[3px] border-cream bg-amber px-8 py-4 font-display text-sm text-amber-foreground uppercase transition hover:scale-105"
            >
              Leer más <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <Reveal className="border-b-[3px] border-forest bg-amber px-6 py-16 text-amber-foreground md:border-r-[3px] md:px-12">
          <h3 className="font-display text-3xl uppercase sm:text-5xl">¿Tienes una tienda?</h3>
          <p className="mt-3 max-w-sm font-semibold">
            Vende Resetea en tu espacio con condiciones mayoristas.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-[3px] border-forest bg-forest px-7 py-3.5 font-display text-sm text-forest-foreground uppercase transition hover:scale-105"
          >
            Hablemos <ArrowRight className="size-4" />
          </Link>
        </Reveal>
        <Reveal
          delay={0.08}
          className="border-b-[3px] border-forest bg-pink px-6 py-16 text-pink-foreground md:px-12"
        >
          <h3 className="font-display text-3xl uppercase sm:text-5xl">Personalizados</h3>
          <p className="mt-3 max-w-sm font-semibold">
            Personalizamos semillas, mensajes y packaging para tu marca o evento.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-[3px] border-forest bg-forest px-7 py-3.5 font-display text-sm text-forest-foreground uppercase transition hover:scale-105"
          >
            Pide presupuesto <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

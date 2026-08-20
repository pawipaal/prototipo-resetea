import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
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
import { Wave } from "@/components/site/Wave";
import { accentBg, accentText } from "@/components/site/accents";
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
        content:
          "Kits de siembra, papelería plantable y regalos ecológicos hechos en España.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const slides = [
  {
    image: hero1,
    kicker: "Nueva colección",
    title: "Pide un deseo",
    text: "Regalos que se plantan, crecen y se recuerdan. Papel semilla y kits hechos a mano.",
    accent: "pink" as const,
  },
  {
    image: hero2,
    kicker: "Súper ventas",
    title: "Siembra alegría",
    text: "Detalles originales para bodas, empresas y personas que cuidan del planeta.",
    accent: "lime" as const,
  },
];

const values = [
  { icon: Recycle, label: "Sostenibles", text: "Materiales que vuelven a la tierra", accent: "lime" as const },
  { icon: Leaf, label: "Naturales", text: "Semillas ecológicas certificadas", accent: "sky" as const },
  { icon: Sparkles, label: "Originales", text: "Diseño propio, hecho a mano", accent: "pink" as const },
  { icon: Sprout, label: "Responsables", text: "Producción local en España", accent: "amber" as const },
];

function Hero() {
  const [i, setI] = useState(0);
  const slide = slides[i];

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className={cn(
                "inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide",
                accentBg[slide.accent],
                accentText[slide.accent],
              )}
            >
              {slide.kicker}
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] font-extrabold md:text-7xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">{slide.text}</p>
            <Link
              to="/tienda"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground transition hover:scale-105"
            >
              Comprar <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="relative">
          <div className="absolute -top-6 -left-6 size-32 rounded-full bg-amber/50 float-soft" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              width={1200}
              height={1200}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square w-full rounded-[2.5rem] object-cover shadow-xl"
            />
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)}
              className="grid size-10 place-items-center rounded-full bg-card shadow transition hover:scale-110"
            >
              <ChevronLeft className="size-5" />
            </button>
            {slides.map((s, idx) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Ir a ${s.title}`}
                onClick={() => setI(idx)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  idx === i ? "w-8 bg-pink" : "w-2.5 bg-foreground/20",
                )}
              />
            ))}
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => setI((v) => (v + 1) % slides.length)}
              className="grid size-10 place-items-center rounded-full bg-card shadow transition hover:scale-110"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
      <Wave color="background" />
    </section>
  );
}

function GiftFinder() {
  const [occasion, setOccasion] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  const chip = (active: boolean) =>
    cn(
      "rounded-full border px-4 py-2 text-sm font-semibold transition",
      active
        ? "border-pink bg-pink text-pink-foreground scale-105"
        : "border-border bg-card hover:border-pink hover:text-pink",
    );

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <Reveal className="rounded-[2.5rem] bg-peri/15 p-6 md:p-12">
        <h2 className="font-display text-3xl font-extrabold md:text-4xl">
          Encuentra el regalo perfecto
        </h2>
        <p className="mt-2 text-muted-foreground">
          Dinos para quién es y te enseñamos lo que más florece.
        </p>

        <label className="mt-6 flex items-center gap-3 rounded-full bg-card px-5 py-3.5 shadow-sm">
          <Search className="size-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="¿Qué estás buscando?"
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Ocasión
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {occasionFilters.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => setOccasion((v) => (v === o ? null : o))}
                  className={chip(occasion === o)}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Tipo de producto
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {typeFilters.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType((v) => (v === t ? null : t))}
                  className={chip(type === t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Presupuesto
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {budgetFilters.map((b) => (
                <button
                  key={b.label}
                  type="button"
                  onClick={() => setBudget((v) => (v === b.label ? null : b.label))}
                  className={chip(budget === b.label)}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Link
          to="/tienda"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground transition hover:scale-105"
        >
          Ver resultados <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </section>
  );
}

function Home() {
  const novedades = products.filter((p) => p.isNew).slice(0, 4);
  const ventas = products.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.08} className="text-center">
              <div
                className={cn(
                  "mx-auto grid size-24 place-items-center rounded-full transition-transform duration-300 hover:scale-110",
                  accentBg[v.accent],
                  accentText[v.accent],
                )}
              >
                <v.icon className="size-10" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{v.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Novedades</h2>
          <Link to="/tienda" className="text-sm font-bold text-pink hover:underline">
            Ver todo
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {novedades.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      <Wave color="cream" />
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Súper ventas</h2>
            <Link to="/tienda" className="text-sm font-bold text-pink hover:underline">
              Ver todo
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ventas.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
        <Wave color="background" />
      </section>

      <GiftFinder />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="font-display text-3xl font-extrabold md:text-4xl">Compra por categoría</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                to="/categoria/$slug"
                params={{ slug: c.slug }}
                className="group block overflow-hidden rounded-[2rem] bg-card shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    width={900}
                    height={675}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className={cn(
                      "absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold",
                      accentBg[c.accent],
                      accentText[c.accent],
                    )}
                  >
                    {c.name}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-xl font-bold">{c.name}</h3>
                    <p className="text-sm text-muted-foreground">{c.tagline}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-pink">
                    Ver productos <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <Reveal>
          <img
            src={story}
            alt="El taller de Resetea"
            loading="lazy"
            width={1000}
            height={1000}
            className="scallop aspect-square w-full object-cover"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Conoce nuestra historia
          </h2>
          <p className="mt-4 text-muted-foreground">
            Empezamos en un taller pequeño con una idea grande: que un regalo pueda seguir vivo
            después de abrirlo. Hoy fabricamos papel semilla y kits de siembra en España, con
            materiales que vuelven a la tierra y personas que los cuidan.
          </p>
          <Link
            to="/nuestra-historia"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 font-bold text-lime-foreground transition hover:scale-105"
          >
            Leer más <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 md:grid-cols-2">
        <Reveal className="rounded-[2rem] bg-amber p-10 text-amber-foreground">
          <h3 className="font-display text-2xl font-extrabold">¿Tienes una tienda?</h3>
          <p className="mt-2 opacity-80">Vende Resetea en tu espacio con condiciones mayoristas.</p>
          <Link
            to="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:scale-105"
          >
            Hablemos <ArrowRight className="size-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.08} className="rounded-[2rem] bg-peri p-10 text-peri-foreground">
          <h3 className="font-display text-2xl font-extrabold">
            ¿Buscas productos personalizados?
          </h3>
          <p className="mt-2 opacity-80">
            Personalizamos semillas, mensajes y packaging para tu marca o evento.
          </p>
          <Link
            to="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:scale-105"
          >
            Pide presupuesto <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

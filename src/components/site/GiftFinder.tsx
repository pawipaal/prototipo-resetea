import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { budgetFilters, occasionFilters, typeFilters } from "@/data/products";
import { cn } from "@/lib/utils";

export function GiftFinder() {
  const [occasion, setOccasion] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  const chip = (active: boolean) =>
    cn(
      "rounded-full px-4 py-2 font-display text-xs transition",
      active ? "bg-forest text-forest-foreground scale-105" : "bg-cream hover:bg-amber",
    );

  const groups = [
    { title: "¿Para qué o quién?", items: occasionFilters, value: occasion, set: setOccasion },
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
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-amber text-forest">
        <div className="px-6 pt-10 pb-16 md:px-12 md:pt-14 md:pb-24">
          <h2 className="whitespace-nowrap font-display text-2xl sm:text-4xl lg:text-6xl">
            Encuentra el regalo perfecto
          </h2>
          <p className="mt-6 max-w-xl font-semibold">
            Busca por palabra o elige ocasión, tipo de producto y presupuesto. ¡Te llevamos
            directo a los productos que encajan!
          </p>

          <label className="mt-8 flex max-w-xl items-center gap-3 rounded-full bg-cream px-5 py-3.5">
            <Search className="size-4" />
            <input
              type="search"
              placeholder="Busca un regalo: kit de cultivo, lápiz..."
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

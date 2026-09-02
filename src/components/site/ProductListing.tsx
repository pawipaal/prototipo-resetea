import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { budgetFilters, occasionFilters, typeFilters, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

type Sort = "destacados" | "precio-asc" | "precio-desc" | "valorados";

export function ProductListing({ items }: { items: Product[] }) {
  const [occasion, setOccasion] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [sort, setSort] = useState<Sort>("destacados");

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const filtered = useMemo(() => {
    const range = budgetFilters.find((b) => b.label === budget);
    const out = items.filter((p) => {
      if (occasion.length && !occasion.some((o) => p.occasions.includes(o))) return false;
      if (type.length && !type.some((t) => p.types.includes(t))) return false;
      if (range && (p.price < range.min || p.price >= range.max)) return false;
      return true;
    });
    const sorted = [...out];
    if (sort === "precio-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "precio-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "valorados") sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [items, occasion, type, budget, sort]);

  const chip = (active: boolean) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-semibold transition",
      active ? "scale-105 bg-pink text-pink-foreground" : "bg-card hover:text-pink",
    );

  return (
    <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
      <aside className="space-y-6">
        <FilterGroup title="Ocasión">
          {occasionFilters.map((o) => (
            <button
              key={o}
              type="button"
              className={chip(occasion.includes(o))}
              onClick={() => toggle(occasion, setOccasion, o)}
            >
              {o}
            </button>
          ))}
        </FilterGroup>
        <FilterGroup title="Tipo de producto">
          {typeFilters.map((t) => (
            <button
              key={t}
              type="button"
              className={chip(type.includes(t))}
              onClick={() => toggle(type, setType, t)}
            >
              {t}
            </button>
          ))}
        </FilterGroup>
        <FilterGroup title="Presupuesto">
          {budgetFilters.map((b) => (
            <button
              key={b.label}
              type="button"
              className={chip(budget === b.label)}
              onClick={() => setBudget(budget === b.label ? null : b.label)}
            >
              {b.label}
            </button>
          ))}
        </FilterGroup>
      </aside>

      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">{filtered.length} productos</p>
          <label className="flex items-center gap-2 text-sm">
            Ordenar por
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-full bg-card px-3 py-2 text-sm font-semibold outline-none"
            >
              <option value="destacados">Destacados</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="valorados">Mejor valorados</option>
            </select>
          </label>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-3xl bg-secondary px-6 py-16 text-center text-muted-foreground">
            No hay productos con estos filtros. Prueba a quitar alguno.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-base">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

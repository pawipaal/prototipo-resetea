import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { ProductListing } from "@/components/site/ProductListing";
import { products } from "@/data/products";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "Tienda — Regalos plantables | Resetea" },
      {
        name: "description",
        content:
          "Explora todos los regalos que florecen: kits de siembra, papelería plantable, flores y gourmet ecológico.",
      },
      { property: "og:title", content: "Tienda — Regalos plantables | Resetea" },
      {
        property: "og:description",
        content: "Kits de siembra, papelería plantable, flores y gourmet ecológico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tienda,
});

function Tienda() {
  return (
    <main>
      <section className="bg-amber px-4 py-5 text-forest md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl sm:text-2xl">Encuentra tu regalo</h2>
            <p className="text-sm font-semibold opacity-80">
              Busca por palabra o filtra por ocasión, tipo y presupuesto aquí abajo
            </p>
          </div>
          <label className="flex w-full items-center gap-3 rounded-full bg-cream px-5 py-3 sm:max-w-sm">
            <Search className="size-4 shrink-0" />
            <input
              type="search"
              placeholder="Busca un regalo: kit de cultivo, lápiz..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="font-display text-4xl md:text-5xl">Todos los productos</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Regalos con vida dentro. Filtra por ocasión, tipo o presupuesto y encuentra el tuyo.
        </p>
        <div className="mt-10">
          <ProductListing items={products} />
        </div>
      </div>
    </main>
  );
}

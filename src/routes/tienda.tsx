import { createFileRoute } from "@tanstack/react-router";
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
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="font-display text-4xl md:text-5xl">Todos los productos</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Regalos con vida dentro. Filtra por ocasión, tipo o presupuesto y encuentra el tuyo.
      </p>
      <div className="mt-10">
        <ProductListing items={products} />
      </div>
    </main>
  );
}

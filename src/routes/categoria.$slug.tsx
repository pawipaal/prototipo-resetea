import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProductListing } from "@/components/site/ProductListing";
import { getCategory, productsByCategory } from "@/data/products";
import { accentSoft } from "@/components/site/accents";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, items: productsByCategory(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Categoría no disponible — Resetea" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.category.name} — Resetea`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.tagline },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <div
        className={`flex flex-col gap-6 rounded-4xl p-8 md:flex-row md:items-center ${accentSoft[category.accent]}`}
      >
        <div className="flex-1">
          <h1 className="font-display text-4xl md:text-5xl">{category.name}</h1>
          <p className="mt-3 text-lg">{category.tagline}</p>
        </div>
        <img
          src={category.image}
          alt={category.name}
          width={480}
          height={320}
          className="h-48 w-full rounded-3xl object-cover md:w-80"
        />
      </div>
      <div className="mt-10">
        <ProductListing items={items} />
      </div>
    </main>
  );
}

import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProductListing } from "@/components/site/ProductListing";
import { getCategory, productsByCategory } from "@/data/products";

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
    <main>
      <section className="relative h-[300px] w-full overflow-hidden sm:h-[400px] md:h-[440px]">
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/40" />
        <div className="relative flex h-full items-center justify-center px-4 pb-8 text-center sm:px-8 md:px-12">
          <h1 className="font-display text-5xl text-cream drop-shadow-md sm:text-7xl">
            {category.name}
          </h1>
        </div>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute -bottom-px left-0 h-12 w-full text-background sm:h-20"
          aria-hidden="true"
        >
          <path
            d="M0,45 C160,95 320,0 480,35 C640,70 800,95 960,55 C1120,15 1280,10 1440,45 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:px-8">
        <p className="max-w-xl text-lg text-muted-foreground">{category.tagline}</p>
        <div className="mt-8">
          <ProductListing items={items} />
        </div>
      </div>
    </main>
  );
}

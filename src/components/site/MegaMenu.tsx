import { Link } from "@tanstack/react-router";
import { megaMenuFeatured, megaMenuList, type Category } from "@/data/products";
import { categoryBg } from "./accents";
import { cn } from "@/lib/utils";

export function MegaMenu({ category }: { category: Category }) {
  const listItems = megaMenuList(category.slug, 9);
  const featured = megaMenuFeatured(category.slug);

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-full z-30 shadow-[0_16px_32px_-12px_rgba(58,37,24,0.35)]",
        categoryBg[category.slug] ?? "bg-cream",
      )}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 text-forest md:grid-cols-[220px_1fr]">
        <div>
          <h3 className="font-display text-xl">{category.name}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {listItems.map((product) => (
              <li key={product.slug}>
                <Link
                  to="/producto/$slug"
                  params={{ slug: product.slug }}
                  className="hover:underline"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/categoria/$slug"
            params={{ slug: category.slug }}
            className="mt-5 inline-block font-display text-sm underline underline-offset-4"
          >
            Ver todo
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {featured.map((product) => (
            <Link
              key={product.slug}
              to="/producto/$slug"
              params={{ slug: product.slug }}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-3xl bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 font-display text-sm leading-tight group-hover:underline">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

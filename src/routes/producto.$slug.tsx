import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { formatPrice, getProduct, products } from "@/data/products";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/producto/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Producto no disponible — Resetea" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — Resetea`;
    return {
      meta: [
        { title },
        { name: "description", content: product.short },
        { property: "og:title", content: title },
        { property: "og:description", content: product.short },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/" className="text-sm text-muted-foreground hover:underline">
        ← Volver a la tienda
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          width={900}
          height={900}
          className="w-full rounded-3xl object-cover"
        />
        <div>
          <h1 className="font-display text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-muted-foreground">{product.short}</p>
          <p className="mt-4 flex items-baseline gap-3 font-display text-2xl font-bold">
            {formatPrice(product.price)}
            {product.compareAt ? (
              <span className="text-base font-medium text-muted-foreground line-through">
                {formatPrice(product.compareAt)}
              </span>
            ) : null}
          </p>
          <button
            type="button"
            onClick={() => {
              add(product.slug);
              toast.success(`${product.name} añadido a la cesta`);
            }}
            className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:scale-[1.02]"
          >
            Añadir a la cesta
          </button>
          <p className="mt-6 text-sm leading-relaxed">{product.description}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">También te puede gustar</h2>
        <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {related.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}

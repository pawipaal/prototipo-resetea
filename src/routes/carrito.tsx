import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/products";

export const Route = createFileRoute("/carrito")({
  head: () => ({
    meta: [
      { title: "Tu cesta — Resetea" },
      { name: "description", content: "Revisa tus regalos plantables antes de finalizar la compra." },
      { property: "og:title", content: "Tu cesta — Resetea" },
      { property: "og:description", content: "Revisa tus regalos plantables antes de comprar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, subtotal, shipping, total, setQty, remove } = useCart();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-4xl">Tu cesta</h1>

      {items.length === 0 ? (
        <div className="mt-10 rounded-3xl bg-secondary px-6 py-16 text-center">
          <p className="text-muted-foreground">Todavía no has añadido nada.</p>
          <Link
            to="/tienda"
            className="mt-5 inline-block rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground"
          >
            Ir a la tienda
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_20rem]">
          <ul className="space-y-5">
            {items.map(({ product, qty }) => (
              <li key={product.slug} className="flex gap-4 rounded-3xl bg-card p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  width={112}
                  height={112}
                  className="size-28 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <Link
                    to="/producto/$slug"
                    params={{ slug: product.slug }}
                    className="font-display text-lg font-bold hover:underline"
                  >
                    {product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">{product.short}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Quitar uno"
                      onClick={() => setQty(product.slug, qty - 1)}
                      className="grid size-8 place-items-center rounded-full bg-secondary"
                    >
                      <Minus className="size-4" />
                    </button>
                    <span className="w-6 text-center font-bold">{qty}</span>
                    <button
                      type="button"
                      aria-label="Añadir uno"
                      onClick={() => setQty(product.slug, qty + 1)}
                      className="grid size-8 place-items-center rounded-full bg-secondary"
                    >
                      <Plus className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(product.slug)}
                      className="ml-4 text-xs text-muted-foreground hover:underline"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
                <p className="font-display font-bold">{formatPrice(product.price * qty)}</p>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-3xl bg-secondary p-6">
            <h2 className="font-display text-xl">Resumen</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <dt>Envío</dt>
                <dd>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</dd>
              </div>
              <div className="flex justify-between font-display text-lg font-bold">
                <dt>Total</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
            </dl>
            <Link
              to="/checkout"
              className="mt-5 block rounded-full bg-pink py-3 text-center font-bold text-pink-foreground transition hover:scale-[1.02]"
            >
              Finalizar compra
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}

import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { FREE_SHIPPING_THRESHOLD, useCart } from "@/lib/cart";
import { formatPrice } from "@/data/products";

export function CartDrawer() {
  const { open, setOpen, items, subtotal, shipping, total, setQty, remove } = useCart();
  const missing = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            role="dialog"
            aria-label="Cesta"
            className="fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-card shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-display text-xl">Tu cesta</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar cesta"
                className="grid size-9 place-items-center rounded-full hover:bg-secondary"
              >
                <X className="size-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <p className="text-muted-foreground">Tu cesta está vacía.</p>
                <Link
                  to="/tienda"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
                >
                  Ver productos
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
                  {missing > 0 ? (
                    <p className="rounded-2xl bg-lime/30 px-4 py-3 text-sm font-semibold">
                      Te faltan {formatPrice(missing)} para el envío gratis 🌱
                    </p>
                  ) : (
                    <p className="rounded-2xl bg-lime/30 px-4 py-3 text-sm font-semibold">
                      ¡Envío gratis conseguido!
                    </p>
                  )}
                  {items.map(({ product, qty }) => (
                    <div key={product.slug} className="flex gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="size-20 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {formatPrice(product.price)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            aria-label="Quitar uno"
                            onClick={() => setQty(product.slug, qty - 1)}
                            className="grid size-7 place-items-center rounded-full bg-secondary"
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm font-bold">{qty}</span>
                          <button
                            type="button"
                            aria-label="Añadir uno"
                            onClick={() => setQty(product.slug, qty + 1)}
                            className="grid size-7 place-items-center rounded-full bg-secondary"
                          >
                            <Plus className="size-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => remove(product.slug)}
                            className="ml-auto text-xs text-muted-foreground hover:underline"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 border-t border-border px-5 py-4 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Envío</span>
                    <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between font-display text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <Link
                    to="/checkout"
                    onClick={() => setOpen(false)}
                    className="mt-2 block rounded-full bg-pink py-3 text-center font-bold text-pink-foreground transition hover:scale-[1.02]"
                  >
                    Finalizar compra
                  </Link>
                  <Link
                    to="/carrito"
                    onClick={() => setOpen(false)}
                    className="block py-1 text-center text-xs text-muted-foreground hover:underline"
                  >
                    Ver la cesta completa
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

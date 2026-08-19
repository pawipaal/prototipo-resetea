import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Resetea" },
      { name: "description", content: "Finaliza tu pedido de regalos plantables en tres pasos." },
      { property: "og:title", content: "Checkout — Resetea" },
      { property: "og:description", content: "Finaliza tu pedido en tres pasos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

const steps = ["Datos", "Envío", "Pago"];

function Checkout() {
  const { items, subtotal, shipping, total, clear } = useCart();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <main className="mx-auto grid max-w-xl place-items-center px-4 py-24 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="grid size-20 place-items-center rounded-full bg-lime text-lime-foreground"
        >
          <Check className="size-10" />
        </motion.div>
        <h1 className="mt-6 font-display text-4xl">¡Pedido confirmado!</h1>
        <p className="mt-3 text-muted-foreground">
          Te hemos enviado la confirmación por email. Prepara la tierra: llega en 2-4 días.
        </p>
        <Link
          to="/tienda"
          className="mt-8 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground"
        >
          Seguir comprando
        </Link>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Tu cesta está vacía</h1>
        <Link
          to="/tienda"
          className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground"
        >
          Ir a la tienda
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-4xl">Finalizar compra</h1>

      <ol className="mt-8 flex gap-3">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-1 items-center gap-2">
            <span
              className={cn(
                "grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold transition",
                i <= step ? "bg-pink text-pink-foreground" : "bg-secondary text-muted-foreground",
              )}
            >
              {i + 1}
            </span>
            <span className={cn("text-sm font-semibold", i > step && "text-muted-foreground")}>
              {s}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_20rem]">
        <form
          className="space-y-4 rounded-3xl bg-card p-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (step < steps.length - 1) {
              setStep(step + 1);
              return;
            }
            clear();
            setDone(true);
          }}
        >
          {step === 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nombre" name="nombre" />
              <Field label="Apellidos" name="apellidos" />
              <Field label="Email" name="email" type="email" />
              <Field label="Teléfono" name="tel" type="tel" />
            </div>
          ) : null}

          {step === 1 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Dirección" name="dir" />
              <Field label="Ciudad" name="ciudad" />
              <Field label="Código postal" name="cp" />
              <Field label="Provincia" name="provincia" />
            </div>
          ) : null}

          {step === 2 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Número de tarjeta" name="card" />
              <Field label="Titular" name="titular" />
              <Field label="Caducidad" name="exp" />
              <Field label="CVC" name="cvc" />
              <p className="text-xs text-muted-foreground sm:col-span-2">
                Prototipo de demostración: no se procesa ningún pago real.
              </p>
            </div>
          ) : null}

          <div className="flex gap-3 pt-2">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="rounded-full border border-border px-5 py-3 font-semibold"
              >
                Atrás
              </button>
            ) : null}
            <button
              type="submit"
              className="rounded-full bg-pink px-6 py-3 font-bold text-pink-foreground transition hover:scale-[1.02]"
            >
              {step === steps.length - 1 ? "Pagar" : "Continuar"}
            </button>
          </div>
        </form>

        <aside className="h-fit rounded-3xl bg-secondary p-6">
          <h2 className="font-display text-xl">Tu pedido</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map(({ product, qty }) => (
              <li key={product.slug} className="flex justify-between gap-3">
                <span>
                  {product.name} × {qty}
                </span>
                <span>{formatPrice(product.price * qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
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
        </aside>
      </div>
    </main>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input
        name={name}
        type={type}
        required
        className="mt-1 w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm font-normal outline-none focus:border-pink"
      />
    </label>
  );
}

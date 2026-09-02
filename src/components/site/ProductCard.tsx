import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ShoppingBag, Star } from "lucide-react";
import { toast } from "sonner";
import { formatPrice, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";
import { accentBg, accentText } from "./accents";
import { cn } from "@/lib/utils";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-card transition-transform duration-300 hover:-translate-y-1.5"
    >
      <Link
        to="/producto/$slug"
        params={{ slug: product.slug }}
        className="relative block focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <div className="tint-lilac relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={900}
            height={900}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {product.badge ? (
          <span
            className={cn(
              "sticker-oval absolute top-3 left-3 rotate-[-6deg] px-4 py-2 font-display text-[11px] uppercase",
              accentBg[product.accent],
              accentText[product.accent],
            )}
          >
            {product.badge}
          </span>
        ) : null}
      </Link>

      <button
        type="button"
        onClick={() => {
          add(product.slug);
          toast.success(`${product.name} añadido a la cesta`);
        }}
        aria-label={`Añadir ${product.name} a la cesta`}
        className="absolute top-[calc(100%-10.5rem)] right-3 z-10 grid size-11 translate-y-2 place-items-center rounded-full bg-amber text-amber-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-110 focus-visible:translate-y-0 focus-visible:opacity-100"
      >
        <ShoppingBag className="size-5" />
      </button>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
          <Star className="size-3.5 fill-amber text-amber" />
          {product.rating} · {product.reviews}
        </div>
        <h3 className="mt-1 font-display text-base leading-tight uppercase">
          <Link to="/producto/$slug" params={{ slug: product.slug }}>
            <span className="absolute inset-0" aria-hidden />
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.short}</p>
        <p className="mt-3 flex items-baseline gap-2 font-display text-lg text-forest">
          {formatPrice(product.price)}
          {product.compareAt ? (
            <span className="font-sans text-sm font-medium text-muted-foreground line-through">
              {formatPrice(product.compareAt)}
            </span>
          ) : null}
        </p>
      </div>
    </motion.article>
  );
}

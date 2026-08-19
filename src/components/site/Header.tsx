import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

const announcements = [
  "Envío gratis a partir de 30 €",
  "Hecho a mano en España",
  "Papel semilla 100% biodegradable",
  "Regalos que florecen",
];

export function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
          <button
            type="button"
            onClick={() => setMenu((v) => !v)}
            aria-label="Abrir menú"
            className="grid size-10 place-items-center rounded-full hover:bg-secondary lg:hidden"
          >
            {menu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <Logo />

          <label className="ml-auto hidden max-w-sm flex-1 items-center gap-2 rounded-full bg-secondary px-4 py-2.5 md:flex">
            <Search className="size-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar regalos que florecen…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>

          <div className="ml-auto flex items-center gap-1 md:ml-0">
            <span className="hidden text-xs font-semibold text-muted-foreground lg:inline">
              ES · EUR
            </span>
            <Link
              to="/contacto"
              className="hidden size-10 place-items-center rounded-full hover:bg-secondary sm:grid"
              aria-label="Cuenta"
            >
              <User className="size-5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`Cesta, ${count} artículos`}
              className="relative grid size-10 place-items-center rounded-full hover:bg-secondary"
            >
              <ShoppingBag className="size-5" />
              {count > 0 ? (
                <span className="absolute -top-0.5 -right-0.5 grid size-5 place-items-center rounded-full bg-pink text-[11px] font-bold text-pink-foreground">
                  {count}
                </span>
              ) : null}
            </button>
          </div>
        </div>

        <nav
          className={cn(
            "mx-auto max-w-7xl px-4 pb-3 lg:block",
            menu ? "block" : "hidden",
          )}
        >
          <ul className="flex flex-col gap-1 text-sm font-semibold lg:flex-row lg:gap-6">
            <li>
              <Link
                to="/tienda"
                onClick={() => setMenu(false)}
                className="inline-block rounded-full px-2 py-1.5 hover:text-pink"
                activeProps={{ className: "text-pink" }}
              >
                Ver todo
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/categoria/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setMenu(false)}
                  className="inline-block rounded-full px-2 py-1.5 hover:text-pink"
                  activeProps={{ className: "text-pink" }}
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/nuestra-historia"
                onClick={() => setMenu(false)}
                className="inline-block rounded-full px-2 py-1.5 hover:text-pink"
                activeProps={{ className: "text-pink" }}
              >
                Nuestra historia
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="overflow-hidden bg-lime py-2 text-lime-foreground">
        <div className="marquee-track whitespace-nowrap text-sm font-bold">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0">
              {announcements.map((a) => (
                <span key={a} className="px-6">
                  ✿ {a}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

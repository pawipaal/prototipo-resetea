import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Menu, Search, ShoppingBag, X } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

const announcements = [
  "Envío gratis desde 30 €",
  "Hecho a mano en España",
  "Papel semilla biodegradable",
  "Regalos que florecen",
];

const navLink =
  "font-display text-[13px] uppercase tracking-tight underline-offset-8 hover:underline";

export function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="border-b-[3px] border-forest bg-lilac text-forest">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-4 px-4 py-2">
          <button
            type="button"
            onClick={() => setMenu((v) => !v)}
            aria-label="Abrir menú"
            className="grid size-10 place-items-center rounded-full border-2 border-forest lg:hidden"
          >
            {menu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <Logo />

          <nav className="ml-auto hidden lg:block">
            <ul className="flex items-center gap-5">
              <li>
                <Link to="/tienda" className={navLink} activeProps={{ className: "underline" }}>
                  Tienda
                </Link>
              </li>
              {categories.slice(0, 4).map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/categoria/$slug"
                    params={{ slug: c.slug }}
                    className={navLink}
                    activeProps={{ className: "underline" }}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/nuestra-historia"
                  className={navLink}
                  activeProps={{ className: "underline" }}
                >
                  Historia
                </Link>
              </li>
              <li>
                <Link to="/contacto" className={navLink} activeProps={{ className: "underline" }}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-6">
            <a
              href="#"
              aria-label="Instagram"
              className="hidden size-9 place-items-center rounded-full hover:bg-forest hover:text-cream sm:grid"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hidden size-9 place-items-center rounded-full hover:bg-forest hover:text-cream sm:grid"
            >
              <Facebook className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`Cesta, ${count} artículos`}
              className="relative grid size-10 place-items-center rounded-full hover:bg-forest hover:text-cream"
            >
              <ShoppingBag className="size-5" />
              <span className="absolute -top-0.5 -right-0.5 grid size-5 place-items-center rounded-full bg-amber font-display text-[11px] text-amber-foreground">
                {count}
              </span>
            </button>
          </div>
        </div>

        <div className={cn("mx-auto max-w-7xl px-4 pb-4 lg:hidden", menu ? "block" : "hidden")}>
          <label className="flex items-center gap-2 rounded-full border-2 border-forest bg-cream px-4 py-2.5">
            <Search className="size-4" />
            <input
              type="search"
              placeholder="Buscar regalos…"
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>
          <ul className="mt-3 flex flex-col gap-1">
            <li>
              <Link to="/tienda" onClick={() => setMenu(false)} className={cn(navLink, "block py-2")}>
                Tienda
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/categoria/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setMenu(false)}
                  className={cn(navLink, "block py-2")}
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/nuestra-historia"
                onClick={() => setMenu(false)}
                className={cn(navLink, "block py-2")}
              >
                Historia
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                onClick={() => setMenu(false)}
                className={cn(navLink, "block py-2")}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="overflow-hidden border-b-[3px] border-forest bg-forest py-2 text-forest-foreground">
        <div className="marquee-track-fast whitespace-nowrap font-display text-sm uppercase">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0">
              {announcements.map((a) => (
                <span key={a} className="px-5">
                  {a} <span className="text-amber">✱</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

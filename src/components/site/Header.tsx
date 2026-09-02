import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const announcements = ["Envío gratuito a península a partir de 30€ de compra"];

const shopNav = [
  { label: "Ver todo", slug: undefined },
  { label: "Gourmet", slug: "gourmet" },
  { label: "Flores y biodiversidad", slug: "flores-y-biodiversidad" },
  { label: "Infantil", slug: "cultivos-para-ninos" },
  { label: "Kits originales", slug: "kits-originales" },
  { label: "Papelería plantable", slug: "papeleria-plantable" },
];

const navLink =
  "font-display text-[13px] uppercase tracking-tight underline-offset-8 hover:underline";

export function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Fila 1: logo, buscador, cuenta y cesta */}
      <div className="bg-lilac text-forest">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-2 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center gap-3 lg:justify-self-start">
            <button
              type="button"
              onClick={() => setMenu((v) => !v)}
              aria-label="Abrir menú"
              className="grid size-10 shrink-0 place-items-center rounded-full lg:hidden"
            >
              {menu ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>

            <Logo className="h-10 shrink-0 sm:h-10" />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-2 hidden w-full max-w-3xl items-center justify-self-center rounded-full bg-white py-1 pr-1 pl-5 sm:flex md:mx-6"
          >
            <input
              type="search"
              placeholder="Busca un regalo: kit de cultivo, lápiz…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-amber px-5 py-2 font-display text-[13px] uppercase tracking-tight text-amber-foreground hover:opacity-90"
            >
              Buscar
            </button>
          </form>

          <div className="flex shrink-0 items-center gap-3 justify-self-end sm:gap-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hidden font-display text-[13px] uppercase tracking-tight hover:underline sm:inline"
            >
              Inicia sesión
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hidden items-center rounded-full bg-forest px-5 py-2.5 font-display text-[13px] uppercase tracking-tight text-cream hover:opacity-90 sm:inline-flex"
            >
              Regístrate
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`Cesta, ${count} artículos`}
              className="relative grid size-10 place-items-center rounded-full hover:bg-forest hover:text-cream"
            >
              <ShoppingBag className="size-6" />
              <span className="absolute -top-0.5 -right-0.5 grid size-5 place-items-center rounded-full bg-forest font-display text-[11px] text-cream">
                {count}
              </span>
            </button>
          </div>
        </div>

        <div className={cn("mx-auto max-w-7xl px-4 pb-4 lg:hidden", menu ? "block" : "hidden")}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center rounded-full bg-white py-1 pr-1 pl-4 sm:hidden"
          >
            <input
              type="search"
              placeholder="Busca un regalo: kit de cultivo, lápiz…"
              className="w-full bg-transparent text-sm outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-amber px-4 py-2 font-display text-xs uppercase tracking-tight text-amber-foreground hover:opacity-90"
            >
              Buscar
            </button>
          </form>
          <ul className="mt-3 flex flex-col gap-1">
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className={cn(navLink, "block py-2")}>
                Inicia sesión
              </a>
            </li>
            {shopNav.map((item) => (
              <li key={item.label}>
                {item.slug ? (
                  <Link
                    to="/categoria/$slug"
                    params={{ slug: item.slug }}
                    onClick={() => setMenu(false)}
                    className={cn(navLink, "block py-2")}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    to="/tienda"
                    onClick={() => setMenu(false)}
                    className={cn(navLink, "block py-2")}
                  >
                    {item.label}
                  </Link>
                )}
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

      {/* Fila 2: navegación de tienda, tipo Amazon */}
      <nav className="hidden bg-background lg:block">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex items-center justify-center gap-7 py-2">
            {shopNav.map((item) => (
              <li key={item.label}>
                {item.slug ? (
                  <Link
                    to="/categoria/$slug"
                    params={{ slug: item.slug }}
                    className={cn(navLink, "font-bold")}
                    activeProps={{ className: "underline" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    to="/tienda"
                    className={cn(navLink, "font-bold")}
                    activeProps={{ className: "underline" }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="overflow-hidden bg-forest py-2 text-forest-foreground">
        <div className="marquee-track-fast whitespace-nowrap font-display text-sm uppercase">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0">
              {Array.from({ length: 6 }, (_, i) => (
                <span key={i} className="px-5">
                  {announcements[0]} <span className="text-amber">✱</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

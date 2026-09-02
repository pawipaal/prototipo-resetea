import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const announcements = [
  "Envío gratis desde 30 €",
  "Hecho a mano en España",
  "Papel semilla biodegradable",
  "Regalos que florecen",
];

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
      <div className="border-b-[3px] border-forest bg-cream text-forest">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center gap-4 px-4 py-3">
          <button
            type="button"
            onClick={() => setMenu((v) => !v)}
            aria-label="Abrir menú"
            className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-forest lg:hidden"
          >
            {menu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <Logo className="h-14 shrink-0 sm:h-16" />

          <label className="mx-2 hidden flex-1 items-center gap-2 rounded-full border-2 border-forest bg-white px-5 py-3 sm:flex md:mx-6">
            <input
              type="search"
              placeholder="Busca un regalo: kit de cultivo, lápiz…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <Search className="size-5 shrink-0" />
          </label>

          <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-4">
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
          <label className="flex items-center gap-2 rounded-full border-2 border-forest bg-white px-4 py-2.5 sm:hidden">
            <Search className="size-4" />
            <input
              type="search"
              placeholder="Busca un regalo: kit de cultivo, lápiz…"
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>
          <ul className="mt-3 flex flex-col gap-1">
            <li>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className={cn(navLink, "block py-2")}
              >
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
      <nav className="hidden border-b-[3px] border-forest bg-background lg:block">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex items-center gap-7 py-3">
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

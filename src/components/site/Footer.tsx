import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { categories } from "@/data/products";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="text-primary-foreground" />
          <p className="mt-4 max-w-xs text-sm opacity-80">
            Regalos que se plantan. Diseñados y fabricados en España con materiales que vuelven a
            la tierra.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid size-10 place-items-center rounded-full bg-pink text-pink-foreground transition hover:scale-110">
              <Instagram className="size-5" />
            </a>
            <a href="#" aria-label="Facebook" className="grid size-10 place-items-center rounded-full bg-peri text-peri-foreground transition hover:scale-110">
              <Facebook className="size-5" />
            </a>
            <a href="#" aria-label="Email" className="grid size-10 place-items-center rounded-full bg-amber text-amber-foreground transition hover:scale-110">
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg">Tienda</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>
              <Link to="/tienda" className="hover:opacity-100 hover:underline">
                Ver todo
              </Link>
            </li>
            {categories.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/categoria/$slug"
                  params={{ slug: c.slug }}
                  className="hover:underline"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg">Resetea</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>
              <Link to="/nuestra-historia" className="hover:underline">
                Nuestra historia
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:underline">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/carrito" className="hover:underline">
                Cesta
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg">Newsletter</h3>
          <p className="mt-4 text-sm opacity-80">Ideas que germinan, una vez al mes.</p>
          <form
            className="mt-4 flex overflow-hidden rounded-full bg-primary-foreground/10 p-1"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="tu@email.com"
              aria-label="Email"
              className="w-full bg-transparent px-4 text-sm outline-none placeholder:text-primary-foreground/50"
            />
            <button
              type="submit"
              className="rounded-full bg-lime px-4 py-2 text-sm font-bold text-lime-foreground"
            >
              Unirme
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Resetea · Aviso legal · Privacidad · Cookies
      </div>
    </footer>
  );
}

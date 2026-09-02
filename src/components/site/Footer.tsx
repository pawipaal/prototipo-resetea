import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { categories } from "@/data/products";

export function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="overflow-hidden bg-amber py-3 text-amber-foreground">
        <div className="marquee-track whitespace-nowrap font-display text-2xl uppercase md:text-4xl">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0">
              {["Pide un deseo", "Plántalo", "Regala vida", "Resetea"].map((t) => (
                <span key={t} className="px-6">
                  {t} ✱
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onLight={false} />
          <p className="mt-4 max-w-xs text-sm opacity-85">
            Regalos que se plantan. Diseñados y fabricados en España con materiales que vuelven a la
            tierra.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="sticker-oval grid size-11 place-items-center bg-amber text-amber-foreground transition hover:scale-110"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="sticker-blob grid size-11 place-items-center bg-pink text-pink-foreground transition hover:scale-110"
            >
              <Facebook className="size-5" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="sticker-flower grid size-11 place-items-center bg-lilac text-lilac-foreground transition hover:scale-110"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl">Tienda</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            <li>
              <Link to="/tienda" className="hover:underline">
                Ver todo
              </Link>
            </li>
            {categories.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link to="/categoria/$slug" params={{ slug: c.slug }} className="hover:underline">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl">Resetea</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
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
          <h3 className="font-display text-xl">Newsletter</h3>
          <p className="mt-4 text-sm opacity-85">Ideas que germinan, una vez al mes.</p>
          <form
            className="mt-4 flex overflow-hidden rounded-full p-1"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="tu@email.com"
              aria-label="Email"
              className="w-full bg-transparent px-4 text-sm outline-none placeholder:text-forest-foreground/50"
            />
            <button
              type="submit"
              className="rounded-full bg-amber px-4 py-2 font-display text-xs text-amber-foreground uppercase"
            >
              Unirme
            </button>
          </form>
        </div>
      </div>

      <div className="py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Resetea · Aviso legal · Privacidad · Cookies
      </div>
    </footer>
  );
}

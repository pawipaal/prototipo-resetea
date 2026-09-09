import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

const tiendaLinks = [
  { slug: "gourmet", name: "Gourmet" },
  { slug: "flores-y-biodiversidad", name: "Flores y biodiversidad" },
  { slug: "cultivos-para-ninos", name: "Infantil" },
  { slug: "kits-diy", name: "Kits DIY" },
  { slug: "kits-originales", name: "Kits originales" },
  { slug: "papeleria-plantable", name: "Papelería plantable" },
];

const ayudaLinks = [
  { label: "Contacto", to: "/contacto" as const },
  { label: "FAQs", to: null },
  { label: "Guías de cuidado", to: null },
  { label: "Términos y condiciones", to: null },
  { label: "Política de privacidad", to: null },
  { label: "Devoluciones y reembolsos", to: null },
  { label: "Política de cookies", to: null },
];

const socialIcons = [
  { icon: MapPin, label: "Ubicación", bg: "bg-amber", fg: "text-amber-foreground" },
  { icon: Mail, label: "Email", bg: "bg-pink", fg: "text-pink-foreground" },
  { icon: Phone, label: "Teléfono", bg: "bg-lilac", fg: "text-lilac-foreground" },
  { icon: Instagram, label: "Instagram", bg: "bg-sky", fg: "text-sky-foreground" },
  { icon: Linkedin, label: "LinkedIn", bg: "bg-honey", fg: "text-forest" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onLight />
        </div>

        <div>
          <h3 className="font-display text-xl">Tienda</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            {tiendaLinks.map((c) => (
              <li key={c.slug}>
                <Link to="/categoria/$slug" params={{ slug: c.slug }} className="hover:underline">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/tienda" className="hover:underline">
                Ver todo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl">Ayuda</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            {ayudaLinks.map((item) =>
              item.to ? (
                <li key={item.label}>
                  <Link to={item.to} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.label}>
                  <a href="#" className="hover:underline">
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl">Sobre Resetea</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            <li>
              <Link to="/nuestra-historia" className="hover:underline">
                Nosotros
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Acceso para tiendas
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Acceso a Resetea promocional
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {socialIcons.map(({ icon: Icon, label, bg, fg }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className={`sticker-oval grid size-11 place-items-center ${bg} ${fg} transition hover:scale-110`}
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-forest/10 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()}. Resetea Gestión Responsable S.L.
      </div>
    </footer>
  );
}

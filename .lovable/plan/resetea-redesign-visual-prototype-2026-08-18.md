# Resetea — Redesign (visual prototype)

A modern, playful ecommerce front-end for Resetea. The home page follows your wireframe section-for-section, with no structural changes — only color, typography, imagery and motion. The rest of the store (listing, product, cart, checkout) is designed in the same language.

## Visual direction

- Palette: your dopamine + nature colors — pink `#f055a5`, amber `#fabe37`, lime `#ccd537`, periwinkle `#7a88fe`, orange `#ff9b28`, sky `#bfdff3`, on a warm off-white base with a deep green-black for text. Each category/section gets its own accent so the page feels rhythmic rather than one-note.
- Typography: Outfit for headings (tight, chunky), Figtree for body.
- Shapes: generous rounded corners, the wavy section dividers from your wireframe rendered as real organic SVG waves, soft blob shapes behind products.
- Motion: scroll-reveal on sections, hero carousel with autoplay, hover lift + accent glow on product cards, animated wave dividers, marquee announcement bar, springy add-to-cart and cart-drawer transitions, filter chips that pop on select. Respects reduced-motion.

## Home page (matches the wireframe exactly)

1. Top bar: logo, search, language + currency, cart, account/login button
2. Main nav: Ver todo, Gourmet, Flores y biodiversidad, Para niños, Ediciones originales, Papelería plantable
3. Scrolling announcement marquee (envío gratis)
4. Hero carousel "Pide un deseo" with arrows, dots, CTA "Comprar"
5. Wave divider into the 4 value circles: Sostenibles, Naturales, Originales, Responsables
6. Novedades — 4 product cards with quick-add
7. Súper ventas — 4 product cards
8. "Encuentra el regalo perfecto" finder panel: search field + chip filter groups (ocasión, tipo de producto, presupuesto)
9. "Compra por categoría" — 6 large image tiles, each with "Ver productos"
10. "Conoce nuestra historia" — scalloped image + text + "Leer más"
11. Two CTA cards: ¿Tienes una tienda? / ¿Buscas productos personalizados?
12. Footer: Resetea, Tienda, Contacto, Síguenos + legal bar

## Other pages

- `/tienda` and `/categoria/$slug` — product listing with sidebar/drawer filters, sort, chip filters, responsive grid
- `/producto/$slug` — gallery, price, variants, quantity, add to cart, description accordions, related products
- Cart drawer (slide-in from any page) + `/carrito`
- `/checkout` — 3-step visual flow (datos, envío, pago) with order summary and a confirmation state

## Technical notes

- Design tokens (colors, radii, fonts, wave/blob assets) defined in `src/styles.css` as semantic tokens; no hardcoded colors in components.
- Routes as TanStack Start file routes; each page gets its own `head()` metadata in Spanish.
- Products come from a typed mock catalog in `src/data/products.ts`; cart state lives in a React context with localStorage persistence. No backend — swappable for a real catalog later.
- Product/lifestyle imagery generated to match the palette; illustrated waves and blobs as inline SVG.
- Motion via Motion for React, plus CSS transitions for hovers.

Not included: real payments, real inventory, accounts. Say the word and we can wire it to a real store afterwards.

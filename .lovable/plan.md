# Resetea con la esencia de Brush & Banter

Rehacemos la home entera con el lenguaje visual de Brush & Banter: bloques planos de color saturado, titulares gigantes en mayúsculas, formas "sticker" (óvalos, flores, trapecios) sobre las fotos, y fotos tintadas en lila. La estructura del wireframe se mantiene: no se mueve ninguna sección de sitio, cambia el vestido.

## Paleta (nueva, sustituye la anterior)

- Lila `#C9B6FF` — fondo dominante de header y secciones
- Verde bosque `#0B3B24` — todo el texto, titulares y botones oscuros
- Amarillo `#F2D024` — stickers, badges, acentos
- Rosa chicle `#FBB8DD` — stickers, fondos alternos de sección
- Crema `#FDF9F0` — respiro entre bloques de color

Se reescriben los tokens de `src/styles.css`. El rosa/amarillo/lila de la marca antigua se retiran del sistema para no mezclar dos paletas.

## Tipografía

- Titulares: **Candal** (Google Fonts), siempre en MAYÚSCULAS, muy grande, `leading` apretado
- Cuerpo: Figtree se mantiene

## Home, sección por sección

1. **Header**: barra sólida lila, logo verde a la izquierda, nav en mayúsculas pequeñas y compactas, iconos sociales + carrito a la derecha. Sticky.
2. **Hero**: foto a sangre con velo lila, titular gigantesco en verde encima ("PIDE UN DESEO Y PLÁNTALO"), y 3 stickers de color flotando con enlaces (óvalo amarillo, forma flor amarilla, trapecio rosa). Los stickers laten suavemente al hacer hover. El carrusel actual pasa a un cambio de foto de fondo con puntos discretos.
3. **Marquesina**: cinta verde con texto en mayúsculas y separadores ✱ desplazándose (ya existe la utilidad, se re-estiliza).
4. **Valores**: los 4 círculos se convierten en formas sticker de colores distintos con icono verde dentro.
5. **Novedades / Súper ventas**: fondos alternos crema y rosa; tarjetas de producto con marco verde grueso, esquinas redondas y badge sticker; el precio en verde bold.
6. **Buscador de regalos**: panel lila a sangre con chips tipo pastilla verde/amarilla y titular gigante.
7. **Compra por categoría**: mosaico de tiles con foto tintada y el nombre en sticker de color, hover = zoom + rotación ligera del sticker.
8. **Nuestra historia**: bloque verde a sangre con texto crema y la foto en forma orgánica.
9. **CTAs finales**: dos bloques planos (amarillo y rosa) con titular gigante y botón verde.
10. **Footer**: bloque verde con logo, columnas en mayúsculas y newsletter.

## Resto del sitio

En este paso solo se tocan la home, el header, el footer, la tarjeta de producto y los tokens globales. Como header, footer, tarjeta y tokens son compartidos, el resto de páginas (tienda, producto, carrito, checkout, historia, contacto) heredan la nueva paleta y tipografía automáticamente y quedarán coherentes aunque su composición interna se pula en el siguiente paso.

## Detalle técnico

- `src/styles.css`: nuevos tokens oklch (`--brand-lilac`, `--brand-forest`, `--brand-yellow`, `--brand-pink`, `--brand-cream`), `--font-display: "Candal"`, nuevas utilidades para las formas sticker (`sticker-blob`, `sticker-oval`, `sticker-slant`) vía `@utility` con `clip-path`/`border-radius`.
- `src/routes/__root.tsx`: añadir Candal al `<link>` de Google Fonts.
- Nuevo `src/components/site/Sticker.tsx`: forma de color + texto, con variantes y animación de entrada/hover con Motion.
- Reescritura de `src/routes/index.tsx`, `Header.tsx`, `Footer.tsx`, `ProductCard.tsx`.
- `Wave.tsx` se retira de la home: B&B usa cortes rectos entre bloques de color, no ondas.
- Sin cambios en datos, carrito ni rutas.

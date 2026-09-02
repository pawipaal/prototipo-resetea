import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoHorizontal from "@/assets/logo-resetea-horizontal.png.asset.json";
import logoSymbol from "@/assets/resetea-symbol.png.asset.json";

export function Logo({
  className,
  variant = "horizontal",
  onLight = true,
}: {
  className?: string;
  variant?: "horizontal" | "symbol";
  onLight?: boolean;
}) {
  return (
    <Link to="/" className="group inline-flex items-center" aria-label="Resetea, inicio">
      {variant === "symbol" ? (
        <img
          src={logoSymbol.url}
          alt="Resetea"
          className={cn(
            "h-10 w-auto transition-transform duration-300 group-hover:rotate-12 sm:h-11",
            className,
          )}
          loading="eager"
        />
      ) : (
        // El PNG original trae un margen transparente enorme alrededor del
        // wordmark (solo ~22% de su alto es logo de verdad), así que lo
        // recortamos por CSS: el contenedor define el alto visible real y
        // la imagen se escala y desplaza para que solo se vea el wordmark.
        <HorizontalLogo className={className} onLight={onLight} />
      )}
    </Link>
  );
}

function HorizontalLogo({
  className,
  onLight,
}: {
  className?: string | undefined;
  onLight: boolean;
}) {
  const cropped = (
    <span
      className={cn(
        "relative block h-12 shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105 sm:h-14",
        className,
      )}
      style={{ aspectRatio: "1579 / 429" }}
    >
      <img
        src={logoHorizontal.url}
        alt="Resetea"
        className="absolute max-w-none"
        style={{
          height: "447.55%",
          width: "121.6%",
          top: "-173.66%",
          left: "-10.77%",
        }}
        loading="eager"
      />
    </span>
  );

  if (!onLight) {
    return <span className="rounded-xl bg-background px-3 py-1.5">{cropped}</span>;
  }
  return cropped;
}

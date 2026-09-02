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
    <Link
      to="/"
      className={cn("group inline-flex items-center", className)}
      aria-label="Resetea, inicio"
    >
      {variant === "symbol" ? (
        <img
          src={logoSymbol.url}
          alt="Resetea"
          className="h-10 w-auto transition-transform duration-300 group-hover:rotate-12 sm:h-11"
          loading="eager"
        />
      ) : (
        <img
          src={logoHorizontal.url}
          alt="Resetea"
          className={cn(
            "h-12 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-14",
            !onLight && "rounded-xl bg-background px-3 py-1.5",
          )}
          loading="eager"
        />
      )}
    </Link>
  );
}

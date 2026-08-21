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
          className="h-9 w-auto transition-transform duration-300 group-hover:rotate-12"
          loading="eager"
        />
      ) : (
        <img
          src={logoHorizontal.url}
          alt="Resetea"
          className={cn(
            "h-9 w-auto transition-transform duration-300 group-hover:scale-105",
            !onLight && "rounded-xl bg-background px-3 py-1.5",
          )}
          loading="eager"
        />
      )}
    </Link>
  );
}

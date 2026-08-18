import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-2", className)}
      aria-label="Resetea, inicio"
    >
      <span className="relative grid size-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-12">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <path
            d="M12 21c0-6 3.5-10 8-11 0 6.5-3.4 10.4-8 11Z"
            className="fill-lime"
          />
          <path
            d="M12 21C8 18.5 4.5 15 4 8c5 1 8 5 8 13Z"
            className="fill-pink"
          />
        </svg>
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight">resetea</span>
    </Link>
  );
}

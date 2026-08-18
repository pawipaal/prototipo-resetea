import { cn } from "@/lib/utils";
import type { Accent } from "@/data/products";
import { accentFill } from "./accents";

type WaveProps = {
  /** Color of the section the wave leads into. */
  color?: Accent | "background" | "cream" | "card";
  flip?: boolean;
  className?: string;
};

const fillClass = (color: WaveProps["color"]) => {
  if (!color || color === "background") return "fill-background";
  if (color === "cream") return "fill-cream";
  if (color === "card") return "fill-card";
  return accentFill[color as Accent];
};

export function Wave({ color = "background", flip = false, className }: WaveProps) {
  return (
    <div className={cn("pointer-events-none -mb-px w-full leading-[0]", className)} aria-hidden>
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className={cn("h-[52px] w-full md:h-[86px]", flip && "rotate-180")}
      >
        <path
          className={fillClass(color)}
          d="M0,64 C120,110 240,110 360,86 C480,62 600,14 720,14 C840,14 960,62 1080,80 C1200,98 1320,86 1440,58 L1440,110 L0,110 Z"
        />
      </svg>
    </div>
  );
}

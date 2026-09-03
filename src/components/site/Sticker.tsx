import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type StickerShape = "oval" | "blob" | "flower" | "slant" | "arch";
export type StickerColor = "yellow" | "pink" | "lilac" | "forest" | "cream";

const shapeClass: Record<StickerShape, string> = {
  oval: "sticker-oval",
  blob: "sticker-blob",
  flower: "sticker-flower",
  slant: "sticker-slant",
  arch: "sticker-arch",
};

const colorClass: Record<StickerColor, string> = {
  yellow: "bg-amber text-amber-foreground",
  pink: "bg-pink text-pink-foreground",
  lilac: "bg-lilac text-lilac-foreground",
  forest: "bg-forest text-forest-foreground",
  cream: "bg-cream text-forest",
};

export function Sticker({
  shape = "oval",
  color = "yellow",
  rotate = 0,
  className,
  children,
}: {
  shape?: StickerShape;
  color?: StickerColor;
  rotate?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6, rotate: rotate - 12 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      whileHover={{ scale: 1.08, rotate: rotate + 4 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className={cn(
        "inline-grid place-items-center px-6 py-4 text-center font-display text-sm leading-[0.95] sm:text-base",
        shapeClass[shape],
        colorClass[color],
        className,
      )}
    >
      {children}
    </motion.span>
  );
}

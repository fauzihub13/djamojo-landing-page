"use client";

import { useReveal } from "@/lib/useReveal";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Lightweight reveal-on-scroll wrapper. Memakai IntersectionObserver
 * melalui hook useReveal untuk menambahkan class "is-visible".
 */
export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0
}: RevealProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

"use client";

import { useEffect } from "react";

/**
 * RevealOnScroll: children otomatis di-observe dan ditambahkan
 * class "is-visible" ketika masuk viewport. Cukup bungkus elemen.
 */
export function RevealOnScroll({
  children,
  className = "",
  as: Tag = "div",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reveals = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const d = target.dataset.delay || "0";
            target.style.transitionDelay = `${d}ms`;
            target.classList.add("is-visible");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;
  return (
    <Component
      className={`reveal ${className}`}
      data-delay={delay}
    >
      {children}
    </Component>
  );
}

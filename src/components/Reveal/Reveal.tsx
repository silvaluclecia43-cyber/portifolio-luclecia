import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

type Revealprops = {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: Revealprops) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "active" : ""}`}
      style={{ transitionDelay: `${delay}ms ` }}
    >
      {children}
    </div>
  );
}

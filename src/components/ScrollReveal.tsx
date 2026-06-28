import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "scale" | "left" | "right";
  delay?: 0 | 1 | 2 | 3 | 4;
}

const variantClasses = {
  up: "animate-hidden",
  scale: "animate-hidden-scale",
  left: "animate-hidden-left",
  right: "animate-hidden-right",
};

const ScrollReveal = ({ children, className, variant = "up", delay = 0 }: ScrollRevealProps) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        variantClasses[variant],
        inView && "in-view",
        delay > 0 && `in-view-delay-${delay}`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

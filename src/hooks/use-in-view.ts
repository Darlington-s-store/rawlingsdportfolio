import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const root = options?.root;
  const rootMargin = options?.rootMargin ?? "120px 0px";
  const threshold = options?.threshold ?? 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { root, rootMargin, threshold },
    );
    obs.observe(el);

    // Failsafe timer: ensures content reveals even if scrolling fast or observer fails
    const timer = setTimeout(() => {
      setInView(true);
    }, 1000);

    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, [root, rootMargin, threshold]);

  return { ref, inView };
}


import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

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
      { threshold: 0, rootMargin: "120px 0px", ...options },
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
  }, []);

  return { ref, inView };
}


import { useEffect, useRef } from "react";

/**
 * Subtle scroll-driven parallax.
 *
 * Writes the offset into a CSS custom property (--parallax-y) inside a
 * requestAnimationFrame loop, so React never re-renders while scrolling and the
 * browser keeps the transform on the compositor. The loop only runs while the
 * element intersects the viewport.
 */
export function useParallax<T extends HTMLElement>(amplitude = 24) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--parallax-y", "0px");
      return;
    }

    const amp = window.matchMedia("(max-width: 640px)").matches
      ? amplitude * 0.6
      : amplitude;

    let frame = 0;
    let current = 0;
    let target = 0;
    let visible = false;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when the element top sits at the viewport bottom,
      // 1 once its bottom has left through the top.
      const raw = (vh - rect.top) / (vh + rect.height);
      const progress = Math.max(0, Math.min(1, raw));
      // +amp (entering) .. -amp (leaving): moves against the scroll direction.
      target = (0.5 - progress) * 2 * amp;
    };

    const tick = () => {
      measure();
      // Smooth coarse scroll deltas (trackpad / touch fling).
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.05) current = target;
      el.style.setProperty("--parallax-y", `${current.toFixed(2)}px`);
      frame = visible ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (!frame && visible) frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        start();
      },
      { rootMargin: "100px" },
    );
    observer.observe(el);

    // Initial placement without the easing ramp.
    measure();
    current = target;
    el.style.setProperty("--parallax-y", `${current.toFixed(2)}px`);

    const onResize = () => start();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      visible = false;
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [amplitude]);

  return ref;
}
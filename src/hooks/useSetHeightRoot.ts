// useSetHeightRoot.ts
import { useEffect } from "react";

export function useSetHeightRoot(ref: React.RefObject<HTMLDivElement | null>, cssVar: string) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const height = element.offsetHeight;
    document.documentElement.style.setProperty(cssVar, `${height}px`);

    const resizeObserver = new ResizeObserver(() => {
      document.documentElement.style.setProperty(cssVar, `${element.offsetHeight}px`);
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [ref, cssVar]);
}
import { useEffect, useRef } from "react";

export function useOutsideClickHandler<T extends HTMLElement>(
  handler?: (event: MouseEvent) => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    function listener(event: MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler?.(event);
    }

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [handler]);

  return ref;
}

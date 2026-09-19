import { useEffect, useState } from "react";

/**
 * Debounces a fast-changing value (e.g. search input) so consumers only
 * react to it after the user stops typing for `delay` ms.
 * This is local UI-state debouncing only — it has nothing to do with
 * server-state fetching, which stays entirely inside React Query.
 */
export function useDebounce<T>(value: T, delay = 400): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounced;
}

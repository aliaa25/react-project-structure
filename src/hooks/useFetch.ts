import { useEffect, useState } from "react";

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function depsChanged(a: unknown[], b: unknown[]): boolean {
  if (a.length !== b.length) return true;
  return a.some((value, index) => !Object.is(value, b[index]));
}

export function useFetch<T>(fetcher: () => Promise<T>, deps: unknown[] = []) {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const [prevDeps, setPrevDeps] = useState(deps);
  if (depsChanged(prevDeps, deps)) {
    setPrevDeps(deps);
    setState({ data: null, loading: true, error: null });
  }

  useEffect(() => {
    let isMounted = true;

    fetcher()
      .then((data) => {
        if (isMounted) setState({ data, loading: false, error: null });
      })
      .catch((err: Error) => {
        if (isMounted) setState({ data: null, loading: false, error: err.message });
      });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
import { QueryClient } from "@tanstack/react-query";

export interface CacheStrategy {
  fetch<T>(key: unknown[], getData: () => Promise<T>): Promise<T>;
}

export class DummyCacheStrategy implements CacheStrategy {
  fetch<T>(key: unknown[], getData: () => Promise<T>): Promise<T> {
    return getData();
  }
}

export class ReactQueryCacheStrategy implements CacheStrategy {
  private timer: any;

  constructor(
    private queryClent = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
        },
      },
    }),
  ) {
    this.timer = setInterval(
      () => {
        queryClent.refetchQueries();
      },
      60 * 60 * 1000,
    );
  }

  fetch<T>(key: unknown[], getData: () => Promise<T>): Promise<T> {
    return this.queryClent.fetchQuery({
      queryKey: key,
      queryFn: getData,
    });
  }

  stopRefetching() {
    clearInterval(this.timer);
  }
}

import createClient from "openapi-fetch";
import type { paths } from "./schema";

type CreateVoidhashFetchClientOptions = {
    baseUrl?: string;
}
export function createVoidhashFetchClient(secretKey: string, options?: CreateVoidhashFetchClientOptions) {
  const fetchClient = createClient<paths>({
    baseUrl: options?.baseUrl || "https://api.voidhash.com",
    headers: {
      'x-secret-key': secretKey,
    },
  });
  return fetchClient;
}

export type FetchClient = ReturnType<typeof createVoidhashFetchClient>;
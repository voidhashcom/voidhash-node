import { createVoidhashFetchClient } from "./fetch";

type CreateVoidhashOptions = {
    apiUrl?: string;
}
export function createVoidhash(secretKey: string, options: CreateVoidhashOptions = {}) {
    const fetchClient = createVoidhashFetchClient(secretKey, {
        baseUrl: options.apiUrl,
    });

    return {
        paywalls: {
            list: async () => {
                const res = await fetchClient.GET("/v1/paywalls");
                if (res.error) throw res.error;
                return res.data;
            },
            create: async (body: { name: string }) => {
                const res = await fetchClient.POST("/v1/paywalls", { body });
                if (res.error) throw res.error;
                return res.data;
            },
        },
        // Add more namespaces (products, customers, etc.) as needed
    };
}
import { createVoidhashFetchClient } from "./fetch";
import { CustomersAPI } from "./resources/customers";

type CreateVoidhashOptions = {
    apiUrl?: string;
}
export function createVoidhash(secretKey: string, options: CreateVoidhashOptions = {}) {
    const fetchClient = createVoidhashFetchClient(secretKey, {
        baseUrl: options.apiUrl,
    });

    return {
        customers: new CustomersAPI(fetchClient),
        // paywalls: {
        //     list: async () => {
        //         try {
        //             const res = await fetchClient.GET("/v1/paywalls");
        //             if (res.data) {
        //                 return res.data;
        //             }
        //             if (res.error) {

        //             }
        //             return res.error;
        //         } catch (error) {
        //             console.error(error);
        //             throw error;
        //         }
        //     },
        //     create: async (body: { name: string }) => {
        //         const res = await fetchClient.POST("/v1/paywalls", { body });
        //         if (res.error) throw res.error;
        //         return res.data;
        //     },
        // },
        // Add more namespaces (products, customers, etc.) as needed
    };
}
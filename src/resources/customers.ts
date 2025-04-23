import { BaseAPI } from "../base-api";
import type { FetchClient } from "../fetch";
import type { Customer } from "../types";


export class CustomersAPI extends BaseAPI {
    constructor(fetchClient: FetchClient) {
        super(fetchClient);
    }

    async list(): Promise<Customer[]> {
        return await this.call(this.fetchClient.GET("/v1/customers"));
    }
}
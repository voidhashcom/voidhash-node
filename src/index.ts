import { createClient } from "./client";
import { CustomersAPI } from "./resources/customers";
import { PaywallsAPI } from "./resources/paywalls";
import { ProductsAPI } from "./resources/products";

export * from "./errors";
export * from "./gen/models";

type CreateVoidhashOptions = {
	apiUrl?: string;
	debug?: boolean;
};
export function createVoidhash(
	secretKey: string,
	options: CreateVoidhashOptions = {},
) {
	const client = createClient({
		baseUrl: options.apiUrl ?? "https://api.voidhash.com/v1",
		headers: {
			"x-secret-key": secretKey,
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		debug: options.debug,
	});

	return {
		customers: new CustomersAPI(client),
		paywalls: new PaywallsAPI(client),
		products: new ProductsAPI(client),
	};
}

/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from "../../../client.ts";
import type { RequestConfig, ResponseErrorConfig } from "../../../client.ts";
import type {
	GetPaywallProductsQueryResponse,
	GetPaywallProductsPathParams,
	GetPaywallProducts400,
	GetPaywallProducts401,
	GetPaywallProducts403,
	GetPaywallProducts404,
	GetPaywallProducts409,
	GetPaywallProducts412,
	GetPaywallProducts429,
	GetPaywallProducts500,
} from "../../models.ts";

function getGetPaywallProductsUrl({
	paywallId,
}: { paywallId: GetPaywallProductsPathParams["paywallId"] }) {
	return `/paywalls/${paywallId}/products` as const;
}

/**
 * @description Get all products for a paywall
 * {@link /paywalls/:paywallId/products}
 */
export async function getPaywallProducts(
	{ paywallId }: { paywallId: GetPaywallProductsPathParams["paywallId"] },
	config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
	const { client: request = client, ...requestConfig } = config;

	const res = await request<
		GetPaywallProductsQueryResponse,
		ResponseErrorConfig<
			| GetPaywallProducts400
			| GetPaywallProducts401
			| GetPaywallProducts403
			| GetPaywallProducts404
			| GetPaywallProducts409
			| GetPaywallProducts412
			| GetPaywallProducts429
			| GetPaywallProducts500
		>,
		unknown
	>({
		method: "GET",
		url: getGetPaywallProductsUrl({ paywallId }).toString(),
		...requestConfig,
	});
	return res.data;
}

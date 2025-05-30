/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from "../../../client.ts";
import type { RequestConfig, ResponseErrorConfig } from "../../../client.ts";
import type {
	DeletePaywallProductMutationResponse,
	DeletePaywallProductPathParams,
	DeletePaywallProduct400,
	DeletePaywallProduct401,
	DeletePaywallProduct403,
	DeletePaywallProduct404,
	DeletePaywallProduct409,
	DeletePaywallProduct412,
	DeletePaywallProduct429,
	DeletePaywallProduct500,
} from "../../models.ts";

function getDeletePaywallProductUrl({
	paywallId,
	productId,
}: {
	paywallId: DeletePaywallProductPathParams["paywallId"];
	productId: DeletePaywallProductPathParams["productId"];
}) {
	return `/paywalls/${paywallId}/products/${productId}` as const;
}

/**
 * @description Remove a product from a paywall
 * {@link /paywalls/:paywallId/products/:productId}
 */
export async function deletePaywallProduct(
	{
		paywallId,
		productId,
	}: {
		paywallId: DeletePaywallProductPathParams["paywallId"];
		productId: DeletePaywallProductPathParams["productId"];
	},
	config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
	const { client: request = client, ...requestConfig } = config;

	const res = await request<
		DeletePaywallProductMutationResponse,
		ResponseErrorConfig<
			| DeletePaywallProduct400
			| DeletePaywallProduct401
			| DeletePaywallProduct403
			| DeletePaywallProduct404
			| DeletePaywallProduct409
			| DeletePaywallProduct412
			| DeletePaywallProduct429
			| DeletePaywallProduct500
		>,
		unknown
	>({
		method: "DELETE",
		url: getDeletePaywallProductUrl({ paywallId, productId }).toString(),
		...requestConfig,
	});
	return res.data;
}

/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from "../../../client.ts";
import type { RequestConfig, ResponseErrorConfig } from "../../../client.ts";
import type {
	DeletePaywallMutationResponse,
	DeletePaywallPathParams,
	DeletePaywall400,
	DeletePaywall401,
	DeletePaywall403,
	DeletePaywall404,
	DeletePaywall409,
	DeletePaywall412,
	DeletePaywall429,
	DeletePaywall500,
} from "../../models.ts";

function getDeletePaywallUrl({
	paywallId,
}: { paywallId: DeletePaywallPathParams["paywallId"] }) {
	return `/paywalls/${paywallId}` as const;
}

/**
 * @description Delete a paywall
 * {@link /paywalls/:paywallId}
 */
export async function deletePaywall(
	{ paywallId }: { paywallId: DeletePaywallPathParams["paywallId"] },
	config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
	const { client: request = client, ...requestConfig } = config;

	const res = await request<
		DeletePaywallMutationResponse,
		ResponseErrorConfig<
			| DeletePaywall400
			| DeletePaywall401
			| DeletePaywall403
			| DeletePaywall404
			| DeletePaywall409
			| DeletePaywall412
			| DeletePaywall429
			| DeletePaywall500
		>,
		unknown
	>({
		method: "DELETE",
		url: getDeletePaywallUrl({ paywallId }).toString(),
		...requestConfig,
	});
	return res.data;
}

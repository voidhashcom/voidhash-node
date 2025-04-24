import { BaseAPI } from "../base-api";
import type { FetchClient } from "../client";
import {
	getPaywalls,
	postPaywalls,
	type GetPaywalls200,
	type PostPaywalls200,
	type PostPaywallsMutationRequest,
} from "../gen";

export class PaywallsAPI extends BaseAPI {
	private readonly client: FetchClient;
	constructor(fetchClient: FetchClient) {
		super();
		this.client = fetchClient;
	}

	/**
	 * Create a new paywall
	 * @param {CreatePaywall} paywall
	 * @returns {Promise<Paywall>}
	 */
	async create(paywall: PostPaywallsMutationRequest): Promise<PostPaywalls200> {
		return await this.call(postPaywalls(paywall, { client: this.client }));
	}

	/**
	 * List all paywalls
	 * @returns {Promise<Paywall[]>}
	 */
	async list(): Promise<GetPaywalls200> {
		return await this.call(getPaywalls({ client: this.client }));
	}
}

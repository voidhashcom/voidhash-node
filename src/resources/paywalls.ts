import { BaseAPI } from "../base-api";
import type { FetchClient } from "../client";
import {
	getPaywalls,
	postPaywalls,
	getPaywallsByPaywallId,
	deletePaywallsByPaywallId,
	type GetPaywalls200,
	type PostPaywalls200,
	type PostPaywallsMutationRequest,
	type GetPaywallsByPaywallId200,
	type DeletePaywallsByPaywallId200,
	type PostPaywallsByPaywallIdProducts200,
	postPaywallsByPaywallIdProducts,
	type GetPaywallsByPaywallIdProducts200,
	getPaywallsByPaywallIdProducts,
	type DeletePaywallsByPaywallIdProductsByProductId200,
	deletePaywallsByPaywallIdProductsByProductId,
} from "../gen";

export interface AttachProductOptions {
	paywallId: string;
	productId: string;
}

export interface DetachProductOptions {
	paywallId: string;
	productId: string;
}

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

	/**
	 * Get a paywall by ID
	 * @param {string} id
	 * @returns {Promise<Paywall>}
	 */
	async get(id: string): Promise<GetPaywallsByPaywallId200> {
		return await this.call(
			getPaywallsByPaywallId({ paywallId: id }, { client: this.client }),
		);
	}

	/**
	 * Delete a paywall by ID
	 * @param {string} id
	 * @returns {Promise<void>}
	 */
	async delete(id: string): Promise<DeletePaywallsByPaywallId200> {
		return await this.call(
			deletePaywallsByPaywallId({ paywallId: id }, { client: this.client }),
		);
	}

	/**
	 * Attach a product to a paywall
	 * @param {AttachProductOptions} options
	 * @returns {Promise<PostPaywallsByPaywallIdProducts200>}
	 */
	async attachProduct(
		options: AttachProductOptions,
	): Promise<PostPaywallsByPaywallIdProducts200> {
		return await this.call(
			postPaywallsByPaywallIdProducts(
				{ paywallId: options.paywallId },
				{ productId: options.productId },
				{
					client: this.client,
				},
			),
		);
	}

	/**
	 * List products attached to a paywall
	 * @param {string} paywallId
	 * @returns {Promise<GetPaywallsByPaywallIdProducts200>}
	 */
	async listProducts(id: string): Promise<GetPaywallsByPaywallIdProducts200> {
		return await this.call(
			getPaywallsByPaywallIdProducts(
				{ paywallId: id },
				{ client: this.client },
			),
		);
	}

	/**
	 * Detach a product from a paywall
	 * @param {DetachProductOptions} options
	 * @returns {Promise<DeletePaywallsByPaywallIdProductsByProductId200>}
	 */
	async detachProduct(
		options: DetachProductOptions,
	): Promise<DeletePaywallsByPaywallIdProductsByProductId200> {
		return await this.call(
			deletePaywallsByPaywallIdProductsByProductId(
				{ paywallId: options.paywallId, productId: options.productId },
				{ client: this.client },
			),
		);
	}
}

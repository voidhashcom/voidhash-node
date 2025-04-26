import { BaseAPI } from "../base-api";
import type { FetchClient } from "../client";
import {
	listPaywalls,
	createPaywall,
	getPaywallById,
	deletePaywall,
	type ListPaywalls200,
	type CreatePaywall200,
	type CreatePaywallMutationRequest,
	type GetPaywallById200,
	type DeletePaywall200,
	type AttachProductToPaywall200,
	attachProductToPaywall,
	type GetPaywallProducts200,
	getPaywallProducts,
	type DeletePaywallProduct200,
	deletePaywallProduct,
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
	 * @param {CreatePaywallMutationRequest} paywall
	 * @returns {Promise<CreatePaywall200>}
	 */
	async create(
		paywall: CreatePaywallMutationRequest,
	): Promise<CreatePaywall200> {
		return await this.call(createPaywall(paywall, { client: this.client }));
	}

	/**
	 * List all paywalls
	 * @returns {Promise<ListPaywalls200>}
	 */
	async list(): Promise<ListPaywalls200> {
		return await this.call(listPaywalls({ client: this.client }));
	}

	/**
	 * Get a paywall by ID
	 * @param {string} id
	 * @returns {Promise<GetPaywallById200>}
	 */
	async get(id: string): Promise<GetPaywallById200> {
		return await this.call(
			getPaywallById({ paywallId: id }, { client: this.client }),
		);
	}

	/**
	 * Delete a paywall by ID
	 * @param {string} id
	 * @returns {Promise<DeletePaywall200>}
	 */
	async delete(id: string): Promise<DeletePaywall200> {
		return await this.call(
			deletePaywall({ paywallId: id }, { client: this.client }),
		);
	}

	/**
	 * Attach a product to a paywall
	 * @param {AttachProductOptions} options
	 * @returns {Promise<AttachProductToPaywall200>}
	 */
	async attachProduct(
		options: AttachProductOptions,
	): Promise<AttachProductToPaywall200> {
		return await this.call(
			attachProductToPaywall(
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
	 * @returns {Promise<GetPaywallProducts200>}
	 */
	async listProducts(paywallId: string): Promise<GetPaywallProducts200> {
		return await this.call(
			getPaywallProducts({ paywallId: paywallId }, { client: this.client }),
		);
	}

	/**
	 * Detach a product from a paywall
	 * @param {DetachProductOptions} options
	 * @returns {Promise<DeletePaywallProduct200>}
	 */
	async detachProduct(
		options: DetachProductOptions,
	): Promise<DeletePaywallProduct200> {
		return await this.call(
			deletePaywallProduct(
				{ paywallId: options.paywallId, productId: options.productId },
				{ client: this.client },
			),
		);
	}
}

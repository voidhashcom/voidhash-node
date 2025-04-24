import { BaseAPI } from "../base-api";
import type { FetchClient } from "../client";
import {
	getCustomers,
	getCustomersByAppUserIdByAppUserId,
	postCustomers,
	type GetCustomers200,
	type GetCustomersByAppUserIdByAppUserId200,
	type PostCustomers200,
	type PostCustomersMutationRequest,
} from "../gen";

export class CustomersAPI extends BaseAPI {
	private readonly client: FetchClient;
	constructor(fetchClient: FetchClient) {
		super();
		this.client = fetchClient;
	}

	/**
	 * Create a new customer
	 * @param {CreateCustomer} customer
	 * @returns {Promise<PostCustomers200>}
	 */
	async create(
		customer: PostCustomersMutationRequest,
	): Promise<PostCustomers200> {
		return await this.call(postCustomers(customer, { client: this.client }));
	}

	/**
	 * List all customers
	 * @returns {Promise<GetCustomers200>}
	 */
	async list(): Promise<GetCustomers200> {
		return await this.call(getCustomers({ client: this.client }));
	}

	/**
	 * Get a customer by ID
	 * @param {string} customerId
	 * @returns {Promise<GetCustomersByCustomerId200>}
	 */
	async getByAppUserId(
		appUserId: string,
	): Promise<GetCustomersByAppUserIdByAppUserId200> {
		return await this.call(
			getCustomersByAppUserIdByAppUserId(
				{ appUserId },
				{ client: this.client },
			),
		);
	}
}

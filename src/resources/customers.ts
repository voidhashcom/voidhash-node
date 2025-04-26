import { BaseAPI } from "../base-api";
import type { FetchClient } from "../client";
import {
	listCustomers,
	getCustomerByAppUserId,
	createCustomer,
	type ListCustomers200,
	type GetCustomerByAppUserId200,
	type CreateCustomer200,
	type CreateCustomerMutationRequest,
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
	 * @returns {Promise<CreateCustomer200>}
	 */
	async create(
		customer: CreateCustomerMutationRequest,
	): Promise<CreateCustomer200> {
		return await this.call(createCustomer(customer, { client: this.client }));
	}

	/**
	 * List all customers
	 * @returns {Promise<ListCustomers200>}
	 */
	async list(): Promise<ListCustomers200> {
		return await this.call(listCustomers({ client: this.client }));
	}

	/**
	 * Get a customer by App User ID
	 * @param {string} appUserId
	 * @returns {Promise<GetCustomerByAppUserId200>}
	 */
	async getByAppUserId(appUserId: string): Promise<GetCustomerByAppUserId200> {
		return await this.call(
			getCustomerByAppUserId({ appUserId }, { client: this.client }),
		);
	}
}

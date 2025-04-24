import { BaseAPI } from "../base-api";
import type { FetchClient } from "../client";
import {
	getProducts,
	postProducts,
	getProductsByProductId,
	putProductsByProductId,
	deleteProductsByProductId,
	postProductsByProductIdProviderProducts,
	getProductsByProductIdProviderProducts,
	putProductsByProductIdProviderProductsByProviderIdByProviderProductKey,
	deleteProductsByProductIdProviderProductsByProviderIdByProviderProductKey,
	type GetProducts200,
	type PostProducts200,
	type PostProductsMutationRequest,
	type GetProductsByProductId200,
	type PutProductsByProductId200,
	type PutProductsByProductIdMutationRequest,
	type DeleteProductsByProductId200,
	type PostProductsByProductIdProviderProducts200,
	type PostProductsByProductIdProviderProductsMutationRequest,
	type GetProductsByProductIdProviderProducts200,
	type PutProductsByProductIdProviderProductsByProviderIdByProviderProductKey200,
	type PutProductsByProductIdProviderProductsByProviderIdByProviderProductKeyMutationRequest,
	type DeleteProductsByProductIdProviderProductsByProviderIdByProviderProductKey200,
} from "../gen";

export interface AttachProviderProductOptions {
	productId: string;
	providerProduct: PostProductsByProductIdProviderProductsMutationRequest;
}

export interface UpdateProviderProductOptions {
	productId: string;
	providerProductKey: string;
	providerProduct: PostProductsByProductIdProviderProductsMutationRequest;
}

export interface DeleteProviderProductOptions {
	productId: string;
	providerId: PostProductsByProductIdProviderProductsMutationRequest["providerId"];
	providerProductKey: string;
}

export class ProductsAPI extends BaseAPI {
	private readonly client: FetchClient;
	constructor(fetchClient: FetchClient) {
		super();
		this.client = fetchClient;
	}

	/**
	 * Create a new product
	 * @param {PostProductsMutationRequest} product
	 * @returns {Promise<PostProducts200>}
	 */
	async create(product: PostProductsMutationRequest): Promise<PostProducts200> {
		return await this.call(postProducts(product, { client: this.client }));
	}

	/**
	 * List all products
	 * @returns {Promise<GetProducts200>}
	 */
	async list(): Promise<GetProducts200> {
		return await this.call(getProducts({ client: this.client }));
	}

	/**
	 * Get a product by ID
	 * @param {string} id
	 * @returns {Promise<GetProductsByProductId200>}
	 */
	async get(id: string): Promise<GetProductsByProductId200> {
		return await this.call(
			getProductsByProductId({ productId: id }, { client: this.client }),
		);
	}

	/**
	 * Update a product by ID
	 * @param {string} id
	 * @param {PutProductsByProductIdMutationRequest} product
	 * @returns {Promise<PutProductsByProductId200>}
	 */
	async update(
		id: string,
		product: PutProductsByProductIdMutationRequest,
	): Promise<PutProductsByProductId200> {
		return await this.call(
			putProductsByProductId({ productId: id }, product, {
				client: this.client,
			}),
		);
	}

	/**
	 * Delete a product by ID
	 * @param {string} id
	 * @returns {Promise<DeleteProductsByProductId200>}
	 */
	async delete(id: string): Promise<DeleteProductsByProductId200> {
		return await this.call(
			deleteProductsByProductId({ productId: id }, { client: this.client }),
		);
	}

	/**
	 * Attach a provider product to a product
	 * @param {AttachProviderProductOptions} options
	 * @returns {Promise<PostProductsByProductIdProviderProducts200>}
	 */
	async attachProviderProduct(
		options: AttachProviderProductOptions,
	): Promise<PostProductsByProductIdProviderProducts200> {
		const { productId, providerProduct } = options; // Destructure to separate productId from the request body
		return await this.call(
			postProductsByProductIdProviderProducts(
				{ productId: productId },
				providerProduct,
				{
					client: this.client,
				},
			),
		);
	}

	/**
	 * List provider products attached to a product
	 * @param {string} productId
	 * @returns {Promise<GetProductsByProductIdProviderProducts200>}
	 */
	async listProviderProducts(
		productId: string,
	): Promise<GetProductsByProductIdProviderProducts200> {
		return await this.call(
			getProductsByProductIdProviderProducts(
				{ productId: productId },
				{ client: this.client },
			),
		);
	}

	/**
	 * Update a provider product attached to a product
	 * @param {UpdateProviderProductOptions} options
	 * @returns {Promise<PutProductsByProductIdProviderProductsByProviderIdByProviderProductKey200>}
	 */
	async updateProviderProduct(
		options: UpdateProviderProductOptions,
	): Promise<PutProductsByProductIdProviderProductsByProviderIdByProviderProductKey200> {
		const { productId, providerProductKey, providerProduct } = options;
		return await this.call(
			putProductsByProductIdProviderProductsByProviderIdByProviderProductKey(
				{
					productId,
					providerId: providerProduct.providerId,
					providerProductKey,
				},
				{
					configuration: providerProduct,
				}, // Cast needed after destructuring
				{ client: this.client },
			),
		);
	}

	/**
	 * Delete a provider product attached to a product
	 * @param {DeleteProviderProductOptions} options
	 * @returns {Promise<DeleteProductsByProductIdProviderProductsByProviderIdByProviderProductKey200>}
	 */
	async deleteProviderProduct(
		options: DeleteProviderProductOptions,
	): Promise<DeleteProductsByProductIdProviderProductsByProviderIdByProviderProductKey200> {
		const { productId, providerId, providerProductKey } = options;
		return await this.call(
			deleteProductsByProductIdProviderProductsByProviderIdByProviderProductKey(
				{
					productId: productId,
					providerId: providerId,
					providerProductKey: providerProductKey,
				},
				{ client: this.client },
			),
		);
	}
}

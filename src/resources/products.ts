import { BaseAPI } from "../base-api";
import type { FetchClient } from "../client";
import {
	listProducts,
	createProduct,
	getProductById,
	updateProduct,
	deleteProduct,
	attachProviderProduct,
	getProviderProductsByProductId,
	updateProviderProduct,
	deleteProviderProduct,
	type ListProducts200,
	type CreateProduct200,
	type CreateProductMutationRequest,
	type GetProductById200,
	type UpdateProduct200,
	type UpdateProductMutationRequest,
	type DeleteProduct200,
	type AttachProviderProduct200,
	type AttachProviderProductMutationRequest,
	type GetProviderProductsByProductId200,
	type UpdateProviderProduct200,
	type UpdateProviderProductMutationRequest,
	type DeleteProviderProduct200,
} from "../gen";

export interface AttachProviderProductOptions {
	productId: string;
	providerProduct: AttachProviderProductMutationRequest;
}

export interface UpdateProviderProductOptions {
	productId: string;
	providerProductKey: string;
	providerProduct: UpdateProviderProductMutationRequest;
}

export interface DeleteProviderProductOptions {
	productId: string;
	providerId: string;
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
	 * @param {CreateProductMutationRequest} product
	 * @returns {Promise<CreateProduct200>}
	 */
	async create(
		product: CreateProductMutationRequest,
	): Promise<CreateProduct200> {
		return await this.call(createProduct(product, { client: this.client }));
	}

	/**
	 * List all products
	 * @returns {Promise<ListProducts200>}
	 */
	async list(): Promise<ListProducts200> {
		return await this.call(listProducts({ client: this.client }));
	}

	/**
	 * Get a product by ID
	 * @param {string} id
	 * @returns {Promise<GetProductById200>}
	 */
	async get(id: string): Promise<GetProductById200> {
		return await this.call(
			getProductById({ productId: id }, { client: this.client }),
		);
	}

	/**
	 * Update a product by ID
	 * @param {string} id
	 * @param {UpdateProductMutationRequest} product
	 * @returns {Promise<UpdateProduct200>}
	 */
	async update(
		id: string,
		product: UpdateProductMutationRequest,
	): Promise<UpdateProduct200> {
		return await this.call(
			updateProduct({ productId: id }, product, {
				client: this.client,
			}),
		);
	}

	/**
	 * Delete a product by ID
	 * @param {string} id
	 * @returns {Promise<DeleteProduct200>}
	 */
	async delete(id: string): Promise<DeleteProduct200> {
		return await this.call(
			deleteProduct({ productId: id }, { client: this.client }),
		);
	}

	/**
	 * Attach a provider product to a product
	 * @param {AttachProviderProductOptions} options
	 * @returns {Promise<AttachProviderProduct200>}
	 */
	async attachProviderProduct(
		options: AttachProviderProductOptions,
	): Promise<AttachProviderProduct200> {
		const { productId, providerProduct } = options;
		return await this.call(
			attachProviderProduct({ productId: productId }, providerProduct, {
				client: this.client,
			}),
		);
	}

	/**
	 * List provider products attached to a product
	 * @param {string} productId
	 * @returns {Promise<GetProviderProductsByProductId200>}
	 */
	async listProviderProducts(
		productId: string,
	): Promise<GetProviderProductsByProductId200> {
		return await this.call(
			getProviderProductsByProductId(
				{ productId: productId },
				{ client: this.client },
			),
		);
	}

	/**
	 * Update a provider product attached to a product
	 * @param {UpdateProviderProductOptions} options
	 * @returns {Promise<UpdateProviderProduct200>}
	 */
	async updateProviderProduct(
		options: UpdateProviderProductOptions,
	): Promise<UpdateProviderProduct200> {
		const { productId, providerProductKey, providerProduct } = options;
		return await this.call(
			updateProviderProduct(
				{
					productId,
					providerId: providerProduct.configuration.providerId,
					providerProductKey,
				},
				providerProduct,
				{ client: this.client },
			),
		);
	}

	/**
	 * Delete a provider product attached to a product
	 * @param {DeleteProviderProductOptions} options
	 * @returns {Promise<DeleteProviderProduct200>}
	 */
	async deleteProviderProduct(
		options: DeleteProviderProductOptions,
	): Promise<DeleteProviderProduct200> {
		const { productId, providerId, providerProductKey } = options;
		return await this.call(
			deleteProviderProduct(
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

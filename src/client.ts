import { VoidhashSDKError } from "./errors";

export type RequestConfig<TData = unknown> = {
	url?: string;
	method: "GET" | "PUT" | "PATCH" | "POST" | "DELETE";
	params?: object;
	data?: TData | FormData;
	responseType?:
		| "arraybuffer"
		| "blob"
		| "document"
		| "json"
		| "text"
		| "stream";
	signal?: AbortSignal;
	headers?: HeadersInit;
};

export type ResponseConfig<TData = unknown> = {
	data: TData;
	status: number;
	statusText: string;
};

export type ResponseErrorConfig<TError = unknown> = {
	error: TError;
};

type CreateClientOptions = {
	baseUrl?: string;
	headers?: HeadersInit;
	debug?: boolean;
};

export type FetchClient = ReturnType<typeof createClient>;

export const createClient = (options: CreateClientOptions = {}) => {
	const baseUrl = options.baseUrl ?? "https://api.voidhash.com/v1";
	const newClient = async <TData, TError = unknown, TVariables = unknown>(
		config: RequestConfig<TVariables>,
	): Promise<ResponseConfig<TData>> => {
		if (options.debug) {
			console.log(`> ${config.method} ${baseUrl + config.url}`);
		}
		const response = await fetch(baseUrl + config.url, {
			method: config.method.toUpperCase(),
			body: JSON.stringify(config.data),
			signal: config.signal,
			headers: {
				...options.headers,
				...config.headers,
			},
		});

		if (options.debug) {
			console.log(`< ${response.status} ${response.statusText}`);
		}

		if (response.status > 299) {
			try {
				const error = await response.json();
				throw new VoidhashSDKError(error.message);
			} catch (e) {
				throw new VoidhashSDKError(`${response.status} ${response.statusText}`);
			}
		}

		const data = await response.json();

		return {
			data,
			status: response.status,
			statusText: response.statusText,
		};
	};
	return newClient;
};

export default createClient();

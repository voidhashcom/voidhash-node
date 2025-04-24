import { VoidhashSDKError } from "./errors";

export class BaseAPI {
	protected async call<T>(data: Promise<T>): Promise<T> {
		try {
			const res = await data;
			return res;
		} catch (e) {
			if (e instanceof Error) {
				throw new VoidhashSDKError(e.message);
			}
			throw e;
		}
	}
}

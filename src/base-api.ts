import type { FetchClient } from "./fetch";

export class BaseAPI {
    constructor(protected readonly fetchClient: FetchClient) {}

    protected async call<T extends { data?: unknown | never | undefined, error?: unknown | never | undefined }>(fetchFn: Promise<T>): Promise<NonNullable<T["data"]>> {
        
        const res = await fetchFn;
        if (res.error && this.isVoidhashError(res.error)) {
            throw new Error(res.error.message);
        }
        if (!res.data) throw new Error("An unknown error occured.")
        return res.data;
    }

    private isVoidhashError(error: unknown): error is { message: string } {
        return typeof error === "object" && error !== null && "message" in error;
    }
}

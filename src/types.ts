import type { operations, paths } from "./schema";

export type SuccessResponseContent<operation extends keyof operations> = operations[operation]["responses"][200]["content"];

export type Customer = SuccessResponseContent<"getV1Customers">["application/json"][number];

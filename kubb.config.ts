import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginClient } from "@kubb/plugin-client";
import { pluginTs } from "@kubb/plugin-ts";

export default defineConfig(() => {
	return {
		root: ".",
		input: {
			path: "https://api.voidhash.com/v1/openapi",
		},
		hooks: {
			done: [
				"npm run typecheck",
				"biome format --write ./",
				"biome lint --apply-unsafe ./src",
			],
		},
		output: {
			path: "./src/gen",
			clean: true,
		},
		plugins: [
			pluginOas({
				validate: false,
			}),
			pluginTs({
				output: { path: "models.ts" },
			}),
			pluginClient({
				group: {
					type: "tag",
				},
				operations: true,
				pathParamsType: "object",
				importPath: "../../../client.ts",
			}),
		],
	};
});

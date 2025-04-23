import { defineConfig } from "tsup";

export default defineConfig((env) => {
	return {
		entry: {
			index: "./src/index.ts",
			types: "./src/types.ts",
		},
		format: ["esm", "cjs"],
		splitting: true,
		cjsInterop: true,
		skipNodeModulesBundle: true,
		treeshake: true,
	};
});

import { defineConfig } from "tsup";

export default defineConfig((env) => {
	return {
		entry: {
			index: "./src/index.ts",
		},
		format: ["esm", "cjs"],

		cjsInterop: true,
		skipNodeModulesBundle: true,
		treeshake: true,
		sourcemap: false,
		minify: false,
		splitting: false,
		clean: true,
		dts: true,
	};
});

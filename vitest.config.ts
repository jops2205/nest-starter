import { resolve } from "node:path";
import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		alias: {
			"@": resolve(__dirname, "src"),
			"@test": resolve(__dirname, "test"),
		},
		root: "./",
		coverage: {
			reporter: ["text"],
		},
	},
	plugins: [swc.vite()],
});

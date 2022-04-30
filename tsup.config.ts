import { defineConfig } from 'tsup'

export default defineConfig({
	dts: true,
	clean: true,
	minify: true,
	splitting: true,
	outDir: 'dist',
	noExternal: ['ora'],
	format: ['cjs', 'esm'],
	entry: ['src/index.ts', 'src/cli.ts']
})

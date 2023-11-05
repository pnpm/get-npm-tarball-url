// @ts-check

import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  target: ['es2015'],
  outDir: 'lib',
  clean: true,
  sourcemap: true,
  dts: true,
})

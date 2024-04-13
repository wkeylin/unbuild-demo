import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    "src/demo/index",
    {
      builder: 'mkdist',
      input: 'src',
      pattern: ['**/*.ts', '!**/*.test.ts'],
      outDir: './esm',
      ext: 'js',
      esbuild: {
        target: 'es2015',
      },
    },
  ],
  failOnWarn: false,
  clean: true,
  declaration: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      target: 'es2015',
    },
  },
})

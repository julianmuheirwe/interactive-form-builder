import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import css from 'rollup-plugin-css-only'
// import { text } from './build/banner.json'
// import packageInfo from './package.json'

import node from '@rollup/plugin-node-resolve'
import cjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2';

import fs from 'fs'
import path from 'path'

const baseFolderPath = './src/components/'
// const banner = text.replace('${version}', packageInfo.version)

const components = fs
    .readdirSync(baseFolderPath)
    .filter((f) =>
        fs.statSync(path.join(baseFolderPath, f)).isDirectory()
    )

const entries = {
  'index': './src/index.ts',
  ...components.reduce((obj, name) => {
    obj[name] = (baseFolderPath + name)
    return obj
  }, {})
}

// const babelOptions = {
//   babelHelpers: 'bundled'
// }

const vuePluginConfig = {
  template: {
    isProduction: true,
    compilerOptions: {
      whitespace: 'condense'
    }
  }
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default () => {
  let config = [
    {
      input: entries,
      external: ['vue'],
      output: {
        format: 'esm',
        dir: `dist/esm`,
        entryFileNames: '[name].mjs',
        chunkFileNames: '[name]-[hash].mjs',
      },
      plugins: [
        node({
          extensions: ['.vue', '.ts']
        }),
        typescript({
          typescript: require('typescript')
        }),
        css(),
        peerDepsExternal(),
        vue(vuePluginConfig, {css: false}),
        cjs(),
      ]
    },
    {
      input: 'src/index.ts',
      external: ['vue'],
      output: {
        format: 'esm',
        file: 'dist/ds-library.mjs',
        // banner: banner
      },
      plugins: [
        node({
          extensions: ['.vue', '.ts']
        }),
        typescript({
          typescript: require('typescript')
        }),
        css(),
        peerDepsExternal(),
        vue(vuePluginConfig, {css: false}),
        cjs()
      ]
    },
    {
      input: entries,
      external: ['vue'],
      output: {
        format: 'cjs',
        dir: 'dist/cjs',
        exports: 'named'
      },
      plugins: [
        node({
          extensions: ['.vue', '.ts']
        }),
        typescript({
          typescript: require('typescript')
        }),
        css(),
        peerDepsExternal(),
        vue(vuePluginConfig, {css: false}),
        cjs()
      ]
    },
    {
      input: 'src/index.ts',
      external: ['vue'],
      output: {
        format: 'umd',
        name: capitalize('ds-library'),
        file: 'dist/ds-library.js',
        exports: 'named',
        // banner: banner,
        globals: {
          vue: 'Vue'
        }
      },
      plugins: [
        node({
          extensions: ['.vue', '.ts']
        }),
        typescript({
          typescript: require('typescript')
        }),
        css(),
        peerDepsExternal(),
        vue(vuePluginConfig, {css: false}),
        cjs()
      ]
    }
  ]

  if (process.env.MINIFY === 'true') {
    config = config.filter((c) => !!c.output.file)
    config.forEach((c) => {
      c.output.file = c.output.file.replace(/\.m?js/g, r => `.min${r}`)
      c.plugins.push(terser({
        output: {
          comments: '/^!/'
        }
      }))
    })
  }
  return config
}

// export default [
//   {
//     input: 'src/index.js',
//     output: [
//       {
//         format: 'esm',
//         file: 'dist/library.mjs'
//       },
//       {
//         format: 'cjs',
//         file: 'dist/library.js'
//       }
//     ],
//     plugins: [
//       css(),
//       vue({ css: false }),
//       peerDepsExternal()
//     ]
//   }
// ]
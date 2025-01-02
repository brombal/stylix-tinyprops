import json from '@rollup/plugin-json';
import ts from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      sourcemap: true,
    },
    external: ['@stylix/core'],
    plugins: [json(), ts()],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
    },
    external: ['@stylix/core'],
    plugins: [dts()],
  },
];
